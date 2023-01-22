import React, {Fragment, useContext, useEffect, useState} from 'react'
import {Container} from '@mui/system'
import {IFormatedOrderData, IOrder} from '../../../interfaces/IOrder';
import axios from 'axios';
import AuthContext from '../../../components/store/auth/AuthContext';
import {DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import {Box, IconButton, Snackbar} from '@mui/material';


function Orders() {
    const [open, setOpen] = useState<boolean>(false);
    const [orders, setOrders] = useState<IFormatedOrderData[] | null>(null);
    const ctx = useContext(AuthContext);

    async function fetchOrders() {
        const userId = localStorage.getItem("userId");
        const ordersData = await axios.post("http://localhost:5500/userorders", {user: ctx.user._id || userId}, {withCredentials: true});
        // if (!Array.isArray(ordersData.data)) {
        //     setOpen(true);
        // }
        setOrders(ordersData.data);
    }

    useEffect(() => {
        if (ctx.user) {
            fetchOrders();
        }
    }, []);

    function statusIcon(params: GridRenderCellParams) {
        let statusColor = "red";
        if (params.value === "pending") {
            statusColor = "orange";
        } else if (params.value === "delivered") {
            statusColor = "green"
        }
        return (
            <Box sx={{display: "flex", justifyContent: "space-around", alignContent: "center"}}>
                <Box sx={{}}>
                    <ReportProblemIcon style={{color: statusColor}}/>
                </Box>
                <div>{params.value}</div>
            </Box>
        )
    }

    const orderTableColumns: GridColDef[] = [
        {field: "title", headerName: "Title", width: 240},
        {field: "totalAmount", headerName: "Total Amount", width: 240, sortable: true},
        {field: "status", headerName: "Status", renderCell: statusIcon, width: 240},
        {field: "date", headerName: "Date", width: 240, sortable: true},
    ]

    const rows = (orders as IFormatedOrderData[]) || [];

    const action = (
        <Fragment>
            <IconButton
                size="large"
                aria-label="close"
            />
        </Fragment>
    );

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Container sx={{my: 10}} maxWidth="md">
            {/*{!Array.isArray(orders) ?*/}
            {/*    <Snackbar*/}
            {/*        open={open}*/}
            {/*        autoHideDuration={3000}*/}
            {/*        onClose={handleClose}*/}
            {/*        message={(orders as string)}*/}
            {/*        action={action}*/}
            {/*    />*/}
            {/*    :*/}
            {/*    <Box sx={{height: 400, width: '100%'}}>*/}
            {/*        <DataGrid*/}
            {/*            rows={rows}*/}
            {/*            columns={orderTableColumns}*/}
            {/*            getRowId={(row: any) => row._id}*/}
            {/*        />*/}
            {/*    </Box>*/}
            {/*}*/}

            <Box sx={{height: 400, width: '100%'}}>
                <DataGrid
                    rows={rows}
                    columns={orderTableColumns}
                    getRowId={(row: any) => row._id}
                />
            </Box>
        </Container>
    )
}

export default Orders
