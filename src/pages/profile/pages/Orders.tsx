import React, {useContext, useEffect, useState} from 'react'
import OrderCard from '../../Product/components/OrderCard';
import {Card, CardContent, Typography} from '@mui/material'
import {Box, Container} from '@mui/system'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import {IOrder} from '../../../interfaces/IOrder';
import axios from 'axios';
import AuthContext from '../../../components/store/auth/AuthContext';

function Orders() {

    const [orders, setOrders] = useState<IOrder[] | null>(null);
    const ctx = useContext(AuthContext);

    async function fetchOrders() {
        const userId = localStorage.getItem("userId");
        const ordersData = await axios.post("http://localhost:5500/userorders", {user: ctx.user._id || userId}, {withCredentials: true});
        function timeStampReadable(timestamp: string) {
            let createdDate = Date.parse(timestamp);
            return new Date(createdDate).toLocaleDateString();
        }
        if (ordersData.data.message) {return console.log(ordersData.data.message)}

        const formatedData: IOrder[] = (ordersData.data || []).map((order: IOrder) => {
            return {
                _id: order._id,
                title: order.title,
                totalAmount: order.totalAmount,
                date: timeStampReadable(order.createdAt)
            }
        });
        setOrders(formatedData);
    }

    useEffect(() => {
        if (ctx.user) {
            fetchOrders();
        }
    }, [])

    return (
        <Container sx={{my: 10}} maxWidth="md">
            {orders &&
                orders.map((order: IOrder) => (
                    <OrderCard key={order._id} order={order}/>
                ))
            }
        </Container>
    )
}

export default Orders
