import {Box, Button, FormControl, InputAdornment, TextField} from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {Container} from '@mui/system';
import React from 'react';
import {Link} from 'react-router-dom';
import LoginWithOneTap from "../../components/Login-Signup/LoginWithOneTap";

function Login() {
    return (
        <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
        }}>
            <Container maxWidth="xs">
                <form>
                    <FormControl fullWidth>
                        <TextField sx={{my: 1}} id="email" label="E-mail" variant="filled" type="email" InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <MailOutlineIcon/>
                                </InputAdornment>
                            ),
                        }}/>
                        <TextField sx={{my: 1}} id="password" label="Password" variant="filled" type="password"
                                   InputProps={{
                                       endAdornment: (
                                           <InputAdornment position="start">
                                               <LockOpenIcon/>
                                           </InputAdornment>
                                       ),
                                   }}/>
                    </FormControl>
                    <Box sx={{textAlign: "end"}}>
                        <Button
                            sx={{mt: 1}}
                            size="medium"
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Login
                        </Button>
                    </Box>
                </form>
                <Box sx={{textAlign: "center", mt: 3}}>
                    <Link style={{textDecoration: "none", color: "#1976d2"}} to="/signup">
                        Κάνε την εγγραφή σου
                    </Link>
                </Box>
                <LoginWithOneTap/>
            </Container>
        </Box>
    )
}

export default Login
