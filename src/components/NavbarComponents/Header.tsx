import React, {Fragment, useContext} from 'react';
import TopNavbar from './TopNavbar';
import AuthContext from "../store/auth/AuthContext";
import UserAvatar from "../profile/UserAvatar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {Box, Container} from "@mui/material";
import {Link} from "react-router-dom";

function Header() {
    const {isLoggedIn} = useContext(AuthContext);
    return (
        <div>
            {!isLoggedIn
                ? <TopNavbar/>
                : <Container>
                    <Box sx={{display: "flex", justifyContent: "end", alignItems: "center", mt: 2}}>
                        <UserAvatar/>
                        <Link to="/cart">
                            <AddShoppingCartIcon sx={{ml: 2}} style={{color: "707070"}}/>
                        </Link>
                    </Box>
                </Container>
            }
        </div>
    )
}

export default Header
