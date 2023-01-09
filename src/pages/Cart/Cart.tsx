import {Box, Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {IProduct} from "../../interfaces/IAlcoholDrink";

function Cart() {
    const [cartItems, setCartItems] = useState<IProduct[] | null>(null);
    const getCartItems = () => {
        const cartItem = localStorage.getItem("myCart")
        if (cartItem) {
            setCartItems(JSON.parse(cartItem));
        }
    }

    useEffect(() => {
        getCartItems()
    }, []);
    return (
        <Container maxWidth="sm">
            <Typography sx={{fontWeight: "bold", mt: 3}} variant="h5">
                Το καλάθι σου
            </Typography>
            {cartItems?.length
                ?
                cartItems.map(cartItem => (
                    <Box sx={{backgroundColor: "white", borderRadius: 1, boxShadow: 2, mt: 4}}>
                        <Box sx={{display: "flex", justifyContent: "space-between", p: 2}}>
                            <Typography>
                                {cartItem?.title}
                            </Typography>
                            <Typography>
                                {cartItem?.price}
                            </Typography>
                        </Box>
                    </Box>
                ))
                :
                <Typography sx={{mt: 3}} variant="body2">
                    Το καλάθι είναι άδειο
                </Typography>
            }
        </Container>
    )
}

export default Cart;
