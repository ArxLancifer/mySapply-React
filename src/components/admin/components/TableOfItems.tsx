import React, {useEffect, useState} from 'react';
import {IProductCategory, IProductSubCategory} from "../../../interfaces/ICategory";
// @ts-ignore
import {DataGrid, GridColDef, GridRenderCellParams, GridToolbar} from '@mui/x-data-grid';
import {Box, Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UpdateModal from "./UpdateModal";
import CreateModal from "./CreateModal";

function TableOfItems(props: {createButtonText: string}) {
    const [subCategories, setSubCategories] = useState<IProductSubCategory[]>([]);
    const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
    const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
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
        setOpenUpdateModal(true);
        setSubCategory(subCategory);
    };

    const createColumn = () => {
        setOpenCreateModal(true);
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
        { field: '_id', headerName: 'sub ProductCategories id', width: 150, hide: true },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'slug', headerName: 'Slug', width: 150 },
        { field: 'imageUrl', headerName: 'ImageUrl', width: 150 },
        { field: 'categoryName', headerName: 'ProductCategories name', width: 150 },
        { field: 'category', headerName: 'ProductCategories Id', width: 150, hide: true },
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
            <Box sx={{ mt: 8 }}>
                <Button
                    variant="contained"
                    color="success"
                    onClick={createColumn}
                >
                    {props.createButtonText}
                </Button>
            </Box>
            <Box sx={{ height: 665, width: '100%', mt: 3 }}>
                <DataGrid
                    getRowId={(row: any) => row._id}
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
            <UpdateModal value={openUpdateModal} subCategory={subCategory} setModal={setOpenUpdateModal}  />
            <CreateModal value={openCreateModal} setModal={setOpenCreateModal} />
        </>
    )
}

export default TableOfItems;
