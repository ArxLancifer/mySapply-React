import React, {useEffect, useState} from 'react';
import {IProductCategory, IProductSubCategory} from "../../../interfaces/ICategory";
// @ts-ignore
import {DataGrid, GridColDef, GridRenderCellParams, GridRowsProp, GridToolbar, GridValueGetterParams} from '@mui/x-data-grid';
import {Box, Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UpdateModal from "./UpdateModal";

function TableOfItems() {
    const [subCategories, setSubCategories] = useState<IProductSubCategory[]>([]);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [subCategory, setSubCategory] = useState<IProductSubCategory>({title: "", slug: "", imageUrl: "", category: ""});
    const getSubCategories = async () => {
        try {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            const data = await fetch(`http://localhost:5500/products/sub-categories`, requestOptions);
            const subCategories: IProductSubCategory[] = await data.json();
            setSubCategories(subCategories);
        } catch (e) {
            console.log(e);
        }
    }

    const deleteColumn = async (subCategory: IProductSubCategory) => {
        try {
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            };
            await fetch(`http://localhost:5500/products/sub-categories/${subCategory._id}`, requestOptions);
        } catch (e) {
            console.log(e);
        }
    };

    const updateColumn = (subCategory: IProductSubCategory) => {
        setOpenModal(true);
        setSubCategory(subCategory);
    };

    const rows = subCategories.map(subCategory => {
        return {
            _id: subCategory?._id,
            title: subCategory?.title,
            slug: subCategory?.slug,
            imageUrl: subCategory?.imageUrl,
            categoryName: (subCategory?.category as IProductCategory)?.title,
            category: (subCategory?.category as IProductCategory)?._id
        }
    });

    const columns: GridColDef[] = [
        { field: '_id', headerName: 'sub Category id', width: 150, hide: true },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'slug', headerName: 'Slug', width: 150 },
        { field: 'imageUrl', headerName: 'ImageUrl', width: 150 },
        { field: 'categoryName', headerName: 'Category name', width: 150 },
        { field: 'category', headerName: 'Category Id', width: 150, hide: true },
        { field: 'action', headerName: 'Actions', width: 150, renderCell: (params: GridRenderCellParams) =>
            <>
                <Button onClick={() => updateColumn(params.row)}>
                    <EditIcon color="primary" />
                </Button>
                <Button onClick={() => deleteColumn(params.row)}>
                    <DeleteIcon color="error" />
                </Button>
            </>
        }
    ];

    useEffect( () => {
        getSubCategories();
    }, []);

    return (
        <>
            <Box sx={{ height: 400, width: '100%', mt: 3 }}>
                <DataGrid
                    getRowId={(row: any) => row._id}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
            <UpdateModal value={openModal} subCategory={subCategory} setModal={setOpenModal}  />
        </>
    )
}

export default TableOfItems;
