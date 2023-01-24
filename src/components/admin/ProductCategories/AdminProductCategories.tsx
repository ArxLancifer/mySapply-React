import {Box, Button, Container} from "@mui/material";
import {DataGrid, GridColDef, GridRenderCellParams, GridToolbar} from "@mui/x-data-grid";
import UpdateModal from "../components/UpdateModal";
import CreateModal from "../components/CreateModal";
import React, {useEffect, useState} from "react";
import {IProductCategory, IProductSubCategory} from "../../../interfaces/ICategory";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import AdminUpdateCategory from "./components/AdminUpdateCategory";

function AdminProductCategories() {
    const [categories, setCategories] = useState<IProductCategory[]>([]);
    const [category, setCategory] = useState<Partial<IProductCategory>>({});
    const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
    const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
    const baseUrl = "admin/products/categories";
    const getSubCategories = async () => {
        const categoriesData = await axios.get(`http://localhost:5500/${baseUrl}`);
        setCategories(categoriesData.data);
    }

    const deleteColumn = async (subCategory: IProductSubCategory) => {
        try {
            const requestOptions = {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            };
            await fetch(`http://localhost:5500/${baseUrl}/${subCategory._id}`, requestOptions);
        } catch (e) {
            console.log(e);
        }
    };

    const updateColumn = (category: IProductCategory) => {
        setOpenUpdateModal(true);
        setCategory(category);
    };

    const createColumn = () => {
        setOpenCreateModal(true);
    };

    const rows = categories.map(category => {
        return {
            _id: category?._id,
            title: category?.title,
            slug: category?.slug,
            imageUrl: category?.imageUrl,
            modelRef: category?.modelRef
        }
    });

    const columns: GridColDef[] = [
        {field: '_id', headerName: 'sub ProductCategories id', width: 150, hide: true},
        {field: 'title', headerName: 'Title', width: 150},
        {field: 'slug', headerName: 'Slug', width: 150},
        {field: 'imageUrl', headerName: 'ImageUrl', width: 150},
        {field: 'modelRef', headerName: 'Model reference', width: 150},
        {
            field: 'action', headerName: 'Actions', width: 150, renderCell: (params: GridRenderCellParams) =>
                <>
                    <Button onClick={() => updateColumn(params.row)}>
                        <EditIcon color="primary"/>
                    </Button>
                    <Button onClick={() => deleteColumn(params.row)}>
                        <DeleteIcon color="error"/>
                    </Button>
                </>
        }
    ];

    useEffect(() => {
        getSubCategories();
    }, []);
    return (
        <Container>
            <Box sx={{mt: 8}}>
                <Button
                    variant="contained"
                    color="success"
                    // onClick={createColumn}
                >
                    Δημιουργία κατηγορίας
                </Button>
            </Box>
            <Box sx={{height: 665, width: '100%', mt: 3}}>
                <DataGrid
                    getRowId={(row: any) => row._id}
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    components={{Toolbar: GridToolbar}}
                />
            </Box>
            <AdminUpdateCategory value={openUpdateModal} category={category} setModal={setOpenUpdateModal}  />
            {/*<CreateModal value={openCreateModal} setModal={setOpenCreateModal} />*/}
        </Container>
    )
}

export default AdminProductCategories;
