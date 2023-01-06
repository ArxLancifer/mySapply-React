import React, {useContext, useEffect, useState} from 'react'
import OrderCard from '../../Product/components/OrderCard';
import {Card, CardContent, Typography} from '@mui/material'
import {Box, Container} from '@mui/system'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import {IOrder} from '../../../interfaces/IOrder';
import axios from 'axios';
import AuthContext from '../../../components/store/auth/AuthContext';

function Orders() {

    const [orders, setOrders] = useState<IOrder[]>([]);
    const ctx = useContext(AuthContext)
    async function fetchOrders() {
        const ordersData = await axios.post("http://localhost:5500/asd", {user:ctx.user._id});
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
        console.log(formatedData)
        setOrders(formatedData);
    }

    useEffect(() => {
        fetchOrders();
    }, [])

    return (
        <Container sx={{my: 10}} maxWidth="md">
            {orders.length &&
                orders.map((order: IOrder, index: number) => (
                    <OrderCard order={order} />
                ))
            }
        </Container>
    )
}

export default Orders
