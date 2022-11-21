import React from "react";
import { AppBar, Button, Container, Grid, IconButton, ListItem, Stack, Toolbar, Typography } from "@mui/material";
import styles from "./TopNavbar.module.css";
import { Box } from "@mui/system";

function TopNavbar() {
    return (
            <AppBar position="static" style={{ background: '#6C4AB6' }}>
                <Toolbar>
                    <IconButton>
                    <div className={styles.logo}>
                        <img src="./assets/sapply.png" />
                    </div>
                    </IconButton>
                    <Typography variant="h6" component='div' sx={{flexGrow :1}}>
                        mySapply
                    </Typography>
                    <Stack direction='row' spacing={4}>
                        <Button color='inherit'>Category-1</Button>
                        <Button color='inherit'>Category-2</Button>
                        <Button color='inherit'>Category-3</Button>
                        <Button color='inherit'>Category-4</Button>
                        <div>
                        <Button className="sign" color='inherit'>Signup</Button>
                        <Button className="myCart" color='inherit'>Cart</Button>
                        </div>
                    </Stack>
                    </Toolbar>
            </AppBar>
       
    );
}

export default TopNavbar;
