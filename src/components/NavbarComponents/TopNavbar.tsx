import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import styles from "./TopNavbar.module.css";

function TopNavbar() {
    return (
        <AppBar position="static" style={{ background: '#6C4AB6' }}>
            <Toolbar>
                <IconButton>
                    <div className={styles.logo}>
                        <img src="./assets/sapply.png" alt="Sapply logo" />
                    </div>
                </IconButton>
                <Typography variant="h6" component='div' sx={{ flexGrow: 1 }}>
                    mySapply
                </Typography>
                <Stack direction='row' spacing={4}>
                    <Button color='inherit'>Category-1</Button>
                    <Button color='inherit'>Category-2</Button>
                    <Button color='inherit'>Category-3</Button>
                    <Button color='inherit'>Category-4</Button>
                    <div>
                        <Button className={styles.sign} color='inherit'>
                            <Link  to="/login">
                                <PermIdentityIcon />
                            </Link>
                        </Button>
                        <Button className="myCart" color='inherit'>
                            <AddShoppingCartIcon style={{ color: "FF5B00" }} />
                        </Button>
                    </div>
                </Stack>
            </Toolbar>
        </AppBar>

    );
}

export default TopNavbar;
