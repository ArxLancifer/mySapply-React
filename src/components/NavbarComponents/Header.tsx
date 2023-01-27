import React, {useContext, useEffect, useState} from 'react';
import TopNavbar from './TopNavbar';
import AuthContext from "../store/auth/AuthContext";
import UserAvatar from "../profile/UserAvatar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {Box, Container} from "@mui/material";
import {Link} from "react-router-dom";

function Header() {
    const {isLoggedIn} = useContext(AuthContext);
    const [numberOfCartItems, setNumberOfCartItems] = useState<number>(0);

    // localStorage.removeItem("myCart");
    const cartItems = () => {
        const cartItemsAsString = localStorage.getItem("myCart");
        if (cartItemsAsString) {
            const cartItems = JSON.parse(cartItemsAsString);
            setNumberOfCartItems(cartItems.length)
        } else {
            setNumberOfCartItems(0);
        }
    };

    useEffect(() => {
        cartItems();
    }, []);

    return (
        <div>
            {!isLoggedIn
                ? <TopNavbar/>
                : <Container>
                    <Box sx={{display: "flex", justifyContent: "end", alignItems: "center", mt: 2}}>
                        <Box sx={{flexGrow:1}}>
                        <Link to="/">
                        <img style={{width:"170px"}} src={process.env.PUBLIC_URL + '/assets/sapply.png'} alt="" />
                        </Link>
                        </Box>
                        
                        <UserAvatar/>
                        <Link to="/cart">
                            <Box sx={{position: "relative"}}>
                                {numberOfCartItems > 0 &&
                                    <Box sx={{
                                        position: "absolute",
                                        top: -10,
                                        right: -10,
                                        backgroundColor: "#DB4437",
                                        padding: "3px 7px",
                                        borderRadius: "50%",
                                        fontSize: "0.8rem"
                                    }}>
                                        {numberOfCartItems}
                                    </Box>
                                }
                                <AddShoppingCartIcon sx={{ml: 2}} style={{color: "707070"}}/>
                            </Box>
                        </Link>
                    </Box>
                </Container>
            }
        </div>
    )
}

export default Header
