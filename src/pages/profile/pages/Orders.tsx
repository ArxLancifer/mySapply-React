import React, {useEffect, useState} from 'react'
import OrderCard from '../../Product/components/OrderCard';
import {Card, CardContent, Typography} from '@mui/material'
import {Box, Container} from '@mui/system'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import {IOrder} from '../../../interfaces/IOrder';
import axios from 'axios';

function Orders() {

    const [orders, setOrders] = useState<IOrder[]>([]);

    async function fetchOrders() {
        const ordersData = await axios.get("http://localhost:5500/order");
        function timeStampReadable(timestamp: string) {
            let createdDate = Date.parse(timestamp);
            return new Date(createdDate).toLocaleDateString();
        }

        const formatedData = ordersData.data.map((order: IOrder) => {
            return {
                title: order.title,
                totalAmount: order.totalAmount,
                date: timeStampReadable(order.createdAt)
            }
        });
        setOrders(formatedData);
    }

    useEffect(() => {
        fetchOrders();
    }, [])

    return (
        <Container sx={{my: 10}} maxWidth="md">
            {orders.length &&
                orders.map((order: IOrder, index: number) => (
                    <Typography key={index} variant="body1">
                        {order.title}
                    </Typography>
                ))
            }
        </Container>
    )
}

export default Orders
