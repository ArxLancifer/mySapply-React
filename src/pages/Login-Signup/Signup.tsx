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
    const [userInput, setUserInput] = useState<IUserPost>({email:"", username:"", password:""})

    function handleInput(e:any){
        const inputField = e.target.id
        setUserInput({
            ...userInput,
           [inputField]:e.target.value
        })
    }

    return (
        <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            px: 4,
            transform: "translate(-50%, -50%)",
            width: "60vw",
            height: "50vh",
            borderRadius: 1,
            boxShadow: 3,
        }}>
            <Container maxWidth="xs">
                <form onSubmit={(event) => signup(event, {
                    email: userInput.email,
                    username: userInput.username,
                    password: userInput.password,
                })}>
                    <FormControl fullWidth>
                        <TextField sx={{my: 1}} id="email" label="E-mail" variant="standard" type="email"
                                   value={userInput.email} onChange={handleInput}
                                   InputProps={{
                                       endAdornment: (
                                           <InputAdornment position="start">
                                               <MailOutlineIcon/>
                                           </InputAdornment>
                                       ),
                                   }}/>
                        <TextField sx={{my: 1}} id="username" label="Username" variant="standard"
                                   value={userInput.username} onChange={handleInput}
                                   InputProps={{
                                       endAdornment: (
                                           <InputAdornment position="start">
                                               <PersonPinIcon/>
                                           </InputAdornment>
                                       ),
                                   }}/>
                        <TextField sx={{my: 1}} id="password" label="Password" variant="standard" type="password"
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
                            Submit
                        </Button>
                    </Box>
                </form>
            </Container>
        </Box>
    )
}

export default Signup
