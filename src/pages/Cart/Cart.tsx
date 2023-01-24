import {Box, Button, Container, Modal, TextField, Typography} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {IOrderItem} from "../../interfaces/IOrder";
import {IProduct} from "../../interfaces/IAlcoholDrink";
import axios from "axios";

function Cart() {
    const [open, setOpen] = useState(false);
    const modalInputRef = useRef<{ value: string }>({value: ""});
    const [cartItems, setCartItems] = useState<IOrderItem[] | null>(null);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const getCartItems = () => {
        const cartItem = localStorage.getItem("myCart")
        if (cartItem) {
            setCartItems(JSON.parse(cartItem));
        }
    }

    const createOrder = async () => {
        if (!cartItems?.length) {
            return console.log("Το καλάθι σου είναι άδειο");
        }
        const orderTitle = modalInputRef.current.value;
        if (orderTitle.length < 1) return;  // Xreiazetai validation meta

        const response = await axios.post(`http://localhost:5500/cart/order`, {
            orderTitle,
            cartItems
        }, {withCredentials: true});
        if (response.status === 200) {
            localStorage.removeItem("myCart");
            setCartItems(null);
            handleClose();
        }
    };

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
                    <Box key={(cartItem.productForOrderEntity as IProduct)._id}
                         sx={{backgroundColor: "white", borderRadius: 1, boxShadow: 2, mt: 4}}>
                        <Box sx={{display: "flex", justifyContent: "space-between", p: 2}}>
                            <Typography>
                                {(cartItem.productForOrderEntity as IProduct).title}
                            </Typography>
                            <Typography>
                                {cartItem?.price}
                            </Typography>
                            <Typography>
                                {cartItem?.quantity}
                            </Typography>
                        </Box>
                    </Box>
                ))
                :
                <Typography sx={{mt: 3}} variant="body2">
                    Το καλάθι είναι άδειο
                </Typography>
            }
            <Box sx={{mt: 2, textAlign: "end"}}>
                <Button onClick={handleOpen} variant="contained" color="success">
                    Παραγγελία
                </Button>
            </Box>
            {/* Modal  */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    backgroundColor: 'background.paper',
                    boxShadow: 2,
                    p: 4,
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Τίτλος Παραγγελίας
                    </Typography>
                    <TextField
                        inputRef={modalInputRef}
                        sx={{
                            width: "100%",
                            my: "8px",
                            "& .MuiInputBase-root": {
                                height: 36
                            }
                        }}/>
                    <Button onClick={createOrder} variant="contained">Επιβεβαίωση</Button>
                </Box>
            </Modal>
        </Container>
    )
}

export default Cart;
