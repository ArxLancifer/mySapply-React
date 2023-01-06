import React, { useEffect, useState } from 'react'
import OrderCard from '../../Product/components/OrderCard';
import { Card, CardContent, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { IOrder } from '../../../interfaces/IOrder';
import axios from 'axios';
function Orders() {

    const [orders, setOrders] = useState(null);

    async function fetchOrders(){
        const ordersData = await axios.get("http://localhost:5500/order");
        // setOrders(orders.data)
        function timeStampReadable(timestampe:string){
            let createdDate = Date.parse(timestampe);
            const readableDate = new Date(createdDate).toLocaleDateString()
            return readableDate;
        }
        const formatedData = ordersData.data.map((order:IOrder)=>{
          return {
            title:order.title,
            totalAmount:order.totalAmount,
            date:timeStampReadable(order.createdAt)
          }
        })
        setOrders(formatedData)
        console.log("Fetch ran")
    }

    useEffect(()=>{
       fetchOrders()
    }, [])


    function OrderList(props:any){
        return(
            <Card>
            {props.cardData.map((order:IOrder)=>{
                // return <OrderCard cardData={order} />
                <p>asdsad</p>
            })}
            </Card>
        )
    }

  return (
    <Container sx={{my:10}} maxWidth="md">
        
        {orders && <OrderList cardData={orders}/>}
        
    </Container>
  )
}

export default Orders
