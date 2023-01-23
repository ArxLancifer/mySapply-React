import React, {useContext, useEffect, useState} from 'react';
import {Box, Button, Container} from "@mui/material";
import {DataGrid, GridColDef, GridRenderCellParams, GridToolbar} from "@mui/x-data-grid";
import UpdateModal from "../components/UpdateModal";
import CreateModal from "../components/CreateModal";
import {IProductCategory, IProductSubCategory} from "../../../interfaces/ICategory";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {IProduct} from "../../../interfaces/IAlcoholDrink";
import axios from "axios";
import CreateProductModal from "./components/CreateProductModal";
import HomeContext from "../../store/home-context";

function AdminProductsTable() {
    const categoriesCtx = useContext(HomeContext) as IProductCategory[];
    const [products, setProducts] = useState<IProduct[]>([]);
    const [product, setProduct] = useState<Partial<IProduct>>({});
    const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
    const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
    const baseUrl = "http://localhost:5500/admin/products";
    const getProducts = async () => {
        const productsData = await axios.get(`${baseUrl}`);
        setProducts(productsData.data);
    };

    const deleteColumn = async (product: IProduct) => {
        try {
            await axios.delete(`${baseUrl}/${product?._id}`);
        } catch (e) {
            console.log(e);
        }
    };

    const updateColumn = (product: IProduct) => {
        setOpenUpdateModal(true);
        setProduct(product);
    };

    const createColumn = () => {
        setOpenCreateModal(true);
    };

    const rows = products.map(product => {
        return {
            subCategory: (product?.subCategory as IProductSubCategory)?.title,
            brandName: product?.brandName,
            alcoholVol: product?.alcoholVol,
            weightML: product?.weightML,
            price: product?.price,
            slug: product?.slug,
            collectionType: product?.collectionType,
        }
    });

    const columns: GridColDef[] = [
        // { field: 'userCustomer', headerName: 'User Customer', width: 150 },
        { field: 'subCategory', headerName: 'Sub Category', width: 150 },
        { field: 'brandName', headerName: 'Brand name', width: 150 },
        { field: 'alcoholVol', headerName: 'alcohol Vol', width: 150 },
        { field: 'weightML', headerName: 'WeightML', width: 150 },
        { field: 'price', headerName: 'Price', width: 150 },
        { field: 'slug', headerName: 'Slug', width: 150 },
        { field: 'collectionType', headerName: 'Collection Type', width: 150 },
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

    useEffect(() => {getProducts()}, []);

    return (
        <Container>
            <Box sx={{ mt: 8 }}>
                <Button
                    variant="contained"
                    color="success"
                    onClick={createColumn}
                >
                    Δημιουργία προϊόντος
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
            {/*<UpdateModal value={openUpdateModal} subCategory={subCategory} setModal={setOpenUpdateModal}  />*/}
            <CreateProductModal value={openCreateModal} setModal={setOpenCreateModal} categories={categoriesCtx} />
        </Container>
    )
}

export default AdminProductsTable;
