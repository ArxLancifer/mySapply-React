import {Box, Button, Container, Typography} from "@mui/material";
import {IProduct} from "../../../interfaces/IAlcoholDrink";
import {useState} from "react";
import {IOrderItem} from "../../../interfaces/IOrder";

type Props = {
    product: Partial<IProduct>
}

function AddToCart({product}: Props) {
    let itemsList: IOrderItem[] = [];
    const addToCart = (product: Partial<IProduct>) => {
        // return localStorage.removeItem("myCart");

        const productMap: IOrderItem = {
            productEntity: "AlcoholDrink",
            quantity: 1,
            order: ({...product as IProduct}),
            price: (product?.price as unknown as string)
        }

        let quantity = 1;
        let updatedProduct: Partial<IOrderItem> = {};
        const localStorageCart = localStorage.getItem('myCart');
        if (localStorageCart) {
            const myCart: IOrderItem[] = JSON.parse(localStorageCart);
            if (myCart.length) {
                let productFound = myCart.find(c => (c.order as IProduct)._id === product._id);
                const cartItems = localStorage.getItem('myCart');

                if (!productFound) {
                    if (cartItems) {
                        itemsList = JSON.parse(cartItems);
                    }
                    itemsList.push(productMap);
                    localStorage.setItem('myCart', JSON.stringify(itemsList));
                } else {
                    let arrUpdated: IOrderItem[] = [];
                    updatedProduct = {
                        order: ({...product as IProduct}),
                        quantity: productFound.quantity ? productFound.quantity + 1 : quantity + 1,
                        price: productFound.price,
                        productEntity: "AlcoholDrink"
                    };

                    if (cartItems) {
                        arrUpdated = JSON.parse(cartItems);
                    }

                    itemsList = arrUpdated.filter(c => (c.order as IProduct)._id !== (updatedProduct?.order as IProduct)._id);
                    localStorage.removeItem("myCart");

                    if (productFound) {
                        itemsList.push(updatedProduct as IOrderItem);
                    }
                    localStorage.setItem('myCart', JSON.stringify(itemsList));
                }
            }
        } else {
            itemsList.push(productMap);
            localStorage.setItem('myCart', JSON.stringify(itemsList));
        }

        console.log("itemsList", itemsList);
    };

    return (
        <Box sx={{
            display: {sm: "block", lg: "none"},
            backgroundColor: "white",
            boxShadow: 3,
            position: "absolute",
            bottom: 0,
            width: "100%",
            py: 2,
            borderRadius: "15px 15px 0 0"
        }}>
            <Container sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Typography variant="body1">
                    {product?.price}
                </Typography>
                <Box>
                    <Button onClick={() => addToCart(product)} sx={{px: 5, backgroundColor: "#43993e"}}
                            color={"success"} variant="contained">
                        Προσθήκη στο καλάθι
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default AddToCart;
