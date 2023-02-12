import React, {Fragment} from 'react';
import {Box, Button, Container} from "@mui/material";
import {DataGrid, GridColDef, GridRenderCellParams, GridToolbar} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {IProduct} from "../../../interfaces/IAlcoholDrink";
import axios from "axios";
import SearchToFindSubCategory from "./components/SearchToFindSubCategory";
import {useDispatch, useSelector} from "react-redux";
import {adminProductsActions, AdminProductState} from "../../../store/admin/AdminProducts";
import CreateProductModal from "./components/CreateProductModal";

function AdminProductsTable() {
    const dispatch = useDispatch();
    const baseUrl = "http://localhost:5500/admin/products";

    const products = useSelector<{adminProducts: AdminProductState}>(state => state.adminProducts.products) as IProduct[];
    const isOpen = useSelector<{adminProducts: AdminProductState}>(state => state.adminProducts.isShow) as boolean;

    const deleteColumn = async (product: IProduct) => {
        await axios.delete(`${baseUrl}/${product?._id}`);
    };

    const updateColumn = (product: IProduct) => {
        // setOpenUpdateModal(true);
    };

    const openModalForCreation = () => {
        dispatch(adminProductsActions.handleClose(true));
    };

    const rows = products;

    const columns: GridColDef[] = [
        // { field: 'userCustomer', headerName: 'User Customer', width: 150 },
        {field: 'subCategory', headerName: 'Sub Category', width: 150},
        {field: 'brandName', headerName: 'Brand name', width: 150},
        {field: 'alcoholVol', headerName: 'alcohol Vol', width: 150, hide: true},
        {field: 'weightML', headerName: 'WeightML', width: 150, hide: true},
        {field: 'price', headerName: 'Price', width: 150},
        {field: 'slug', headerName: 'Slug', width: 150},
        {field: 'collectionType', headerName: 'Collection Type', width: 150},
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

    return (
        <Fragment>
            {/*{loading &&*/}
            {/*    <Box sx={{*/}
            {/*        display: 'flex',*/}
            {/*        justifyContent: "center",*/}
            {/*        alignItems: "center",*/}
            {/*        width: "100%",*/}
            {/*        height: "100vh",*/}
            {/*    }}>*/}
            {/*        <CircularProgress/>*/}
            {/*    </Box>*/}
            {/*}*/}
            <SearchToFindSubCategory />
            <Container>
                {products.length > 0 &&
                    <Box>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={openModalForCreation}
                        >
                            Δημιουργία προϊόντος
                        </Button>
                    </Box>
                }
                {products.length > 0 &&
                    <>
                        <Box sx={{height: 665, width: '100%', mt: 3}}>
                            <DataGrid
                                getRowId={(row: any) => row._id}
                                rows={rows}
                                columns={columns}
                                pageSize={10}
                                components={{Toolbar: GridToolbar}}
                            />
                        </Box>
                        {/*<UpdateModal value={openUpdateModal} subCategory={subCategory} setModal={setOpenUpdateModal}  />*/}
                    </>
                }
                {isOpen && <CreateProductModal />}
            </Container>
        </Fragment>
    )
}

export default AdminProductsTable;
