import React, {useContext, useState} from 'react'
import {Container, FormControl, TextField, Box, Button, InputAdornment} from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AuthContext from "../../components/store/auth/AuthContext";

interface IUserPost {
    email: string;
    username: string;
    password: string;
}

function Signup() {
    const {signup} = useContext(AuthContext);
    const [userInput, setUserInput] = useState<IUserPost>({email: "", username: "", password: ""})

    function handleInput(e: any) {
        const inputField = e.target.id
        setUserInput({
            ...userInput,
            [inputField]: e.target.value
        })
    }

    return (
        <Container maxWidth="sm">
            <Box sx={{borderRadius: 1, boxShadow: 3, mt: 5, px: {xs: 3, lg: 8}, py: {xs: 4, lg: 6}}}>
                <form onSubmit={(event) => signup(event, {
                    email: userInput.email,
                    username: userInput.username,
                    password: userInput.password,
                })}>
                    <FormControl fullWidth>
                        <TextField sx={{my: 1}} id="email" label="E-mail" variant="filled" type="email"
                                   value={userInput.email} onChange={handleInput}
                                   InputProps={{
                                       endAdornment: (
                                           <InputAdornment position="start">
                                               <MailOutlineIcon/>
                                           </InputAdornment>
                                       ),
                                   }}/>
                        <TextField sx={{my: 1}} id="username" label="Username" variant="filled"
                                   value={userInput.username} onChange={handleInput}
                                   InputProps={{
                                       endAdornment: (
                                           <InputAdornment position="start">
                                               <PersonPinIcon/>
                                           </InputAdornment>
                                       ),
                                   }}/>
                        <TextField sx={{my: 1}} id="password" label="Password" variant="filled" type="password"
                                   value={userInput.password} onChange={handleInput}
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
                        >
                            Εγγραφή
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    )
}

export default Signup
