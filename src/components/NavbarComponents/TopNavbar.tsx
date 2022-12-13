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

        // <AppBar position="static" style={{ background: '#6C4AB6' }}>
        //     <Toolbar>
        //         <IconButton>
        //             <Link to="/">
        //             <div className={styles.logo}>
        //                 <img src="./assets/sapply.png" alt="Sapply logo" />
        //             </div>
        //             </Link>
        //         </IconButton>
        //         <Typography variant="h6" component='div' sx={{ flexGrow: 1 }}>
        //             mySapply
        //         </Typography>
        //         <Stack direction='row' spacing={4}>
        //             <Button color='inherit'>Category-1</Button>
        //             <Button color='inherit'>Category-2</Button>
        //             <Button color='inherit'>Category-3</Button>
        //             <Button color='inherit'>Category-4</Button>
        //             <div>
        //                 <Button className={styles.sign} color='inherit'>
        //                     <Link  to="/login">
        //                         <PermIdentityIcon />
        //                     </Link>
        //                 </Button>
        //                 <Button className="myCart" color='inherit'>
        //                     <AddShoppingCartIcon style={{ color: "FF5B00" }} />
        //                 </Button>
        //             </div>
        //         </Stack>
        //     </Toolbar>
        // </AppBar>

    );
}

export default TopNavbar;
