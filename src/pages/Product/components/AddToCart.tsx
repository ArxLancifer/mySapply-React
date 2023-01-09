import {Box, Button, Container, Typography} from "@mui/material";
import {IProduct} from "../../../interfaces/IAlcoholDrink";
import {useState} from "react";

type Props = {
    product: Partial<IProduct>
}

function AddToCart({product}: Props) {
    // const [itemsList, setItemsList] = useState<IProduct[] | null>(null);
    let itemsList: IProduct[] = [];
    const addToCart = (product: Partial<IProduct>) => {
        // return localStorage.removeItem("myCart");

        let quantity = 1;
        let obj = {};
        const localStorageCart = localStorage.getItem('myCart');
        if (localStorageCart) {
            const myCart: IProduct[] = JSON.parse(localStorageCart);
            if (myCart.length) {
                let productFound = myCart.find(c => c._id === product._id);
                const cartItem = localStorage.getItem('myCart');
                if (!productFound) {
                    if (cartItem) {
                        itemsList = JSON.parse(cartItem);
                    }
                    itemsList.push(product as IProduct);
                    localStorage.setItem('myCart', JSON.stringify(itemsList));
                } else {
                    let arrUpdated: IProduct[] = [];
                    productFound = {
                        ...productFound,
                        // @ts-ignore
                        quantity: productFound.quantity ? productFound.quantity + 1 : quantity + 1
                    };
                    if (cartItem) {
                        arrUpdated = JSON.parse(cartItem);
                    }
                    itemsList = arrUpdated.filter(c => c._id !== productFound?._id);
                    localStorage.removeItem("myCart");
                    if (productFound) {
                        itemsList.push(productFound);
                    }
                    localStorage.setItem('myCart', JSON.stringify(itemsList));
                }
            }
        } else {
            itemsList.push(product as IProduct);
            localStorage.setItem('myCart', JSON.stringify(itemsList));
        }

        // console.log("itemsList", itemsList);
        // console.log("obj", obj);
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
