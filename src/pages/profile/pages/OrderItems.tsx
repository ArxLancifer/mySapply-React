import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useLocation, useParams} from "react-router-dom";
import {Container} from "@mui/material";
import {IOrderItem} from "../../../interfaces/IOrder";
import {IProduct} from "../../../interfaces/IAlcoholDrink";

function OrderItems() {
    const {_id} = useParams<{_id: string}>();
    const [orderItems, setOrderItems] = useState<IOrderItem[]>([]);
    const fetchOrderItems = async () => {
        const ordersItemsData = await axios.get(`http://localhost:5500/my-orders/${_id}`, {withCredentials: true});
        setOrderItems(ordersItemsData.data);
    };

    useEffect(() => {fetchOrderItems()}, []);
    return (
        <Container>
            {orderItems.map(item => (
                <div>
                    {(item.productForOrderEntity as IProduct).brandName}
                </div>
            ))}
        </Container>
    )
}

export default OrderItems;
