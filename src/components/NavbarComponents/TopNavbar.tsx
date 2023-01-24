import React from "react";
import {Link} from 'react-router-dom';
import {Box, Button, Container} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from "./TopNavbar.module.css";

function TopNavbar() {
    return (
        <Container>
            <Box sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                mt: 2
            }}>
                <Box>
                    <Button className={styles.link} color='inherit'>
                        <Link to="/login">
                            Σύνδεση
                        </Link>
                    </Button>
                </Box>
                <span className={styles.slash}>/</span>
                <Box>
                    <Button className={styles.link} color='inherit'>
                        <Link to="/signup">
                            Εγγραφή
                        </Link>
                    </Button>
                </Box>
                <span className={styles.slashBetween}>|</span>
                <Box sx={{ml: 2}} className="cart">
                    <AddShoppingCartIcon style={{color: "707070"}}/>
                </Box>
            </Box>
        </Container>
    );
}

export default TopNavbar;
