import React from "react";
import { Container, Grid, ListItem } from "@mui/material";
import styles from "./TopNavbar.module.css";
import { Box } from "@mui/system";

function TopNavbar() {
    return (
        <Container>
            <nav>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
                >
                    <div className={styles.logo}>
                        <img src="./assets/sapply.png" />
                    </div>
                    <ul className="navLinks">
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                            }}
                        >
                            <li>
                                <a href="#">Category-1</a>
                            </li>
                            <li>
                                <a href="#">Category-2</a>
                            </li>
                            <li>
                                <a href="#">Category-3</a>
                            </li>
                            <li>
                                <a href="#">Category-4</a>
                            </li>
                        </Box>
                    </ul>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <div className="sign">kati</div>
                        <div className="myCart">Cart</div>
                    </Box>
                </Box>
            </nav>
        </Container>
    );
}

export default TopNavbar;
