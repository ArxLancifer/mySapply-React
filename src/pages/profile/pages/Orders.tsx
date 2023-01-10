import React, {useContext, useEffect, useState} from 'react'
import OrderCard from '../../Product/components/OrderCard';
import {Container} from '@mui/system'
import {IFormatedOrderData, IOrder, IOrderItem} from '../../../interfaces/IOrder';
import axios from 'axios';
import AuthContext from '../../../components/store/auth/AuthContext';
import {DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import {Box} from '@mui/material';
import {red} from '@mui/material/colors';
import {IUser} from "../../../interfaces/IUser";
import {IProduct} from "../../../interfaces/IAlcoholDrink";

function Orders() {

    const [orders, setOrders] = useState<IFormatedOrderData[] | null>(null);
    const ctx = useContext(AuthContext);

    async function fetchOrders() {
        const userId = localStorage.getItem("userId");
        const ordersData = await axios.post("http://localhost:5500/userorders", {user: ctx.user._id || userId}, {withCredentials: true});

        function timeStampReadable(timestamp: string) {
            let createdDate = Date.parse(timestamp);
            return new Date(createdDate).toLocaleDateString();
        }

        if (ordersData.data.message) {return console.log(ordersData.data.message)}

        setOrders(ordersData.data);
    }

    useEffect(() => {
        if (ctx.user) {
            fetchOrders();
        }
    }, [])

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

    const ordersDataRows = orders?.map((orderData: IFormatedOrderData) => {
        return {
            id: orderData?._id,
            title: orderData?.title,
            status: orderData?.status,
            date: orderData?.date
        }
    });

    const orderTableColumns: GridColDef[] = [
        {field: "title", headerName: "Title", width: 240},
        {field: "status", headerName: "Status", renderCell: statusIcon, width: 250},
        {field: "date", headerName: "Date", width: 120, sortable: true},
    ]


    const rows = ordersDataRows || [];

    return (
        <Container sx={{my: 10}} maxWidth="md">
            {/* Cardtype list */}
            {/* {orders &&
                orders.map((order: IOrder) => (
                    <OrderCard key={order._id} order={order}/>
                ))
            } */}

            <Box sx={{height: 400, width: '100%'}}>
                {orders && <DataGrid
                    rows={rows}
                    columns={orderTableColumns}
                />}
            </Box>

        </Container>
    )
}

export default Orders
