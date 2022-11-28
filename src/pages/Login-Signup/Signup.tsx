import React, {useState} from 'react'
import {Container, FormControl, TextField, Box, Button, InputAdornment} from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonPinIcon from '@mui/icons-material/PersonPin';

interface IUserPost {
    email: string;
    username: string;
    password: string;
}

function Signup() {

    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    async function signup(e: any) {
        e.preventDefault();
        const userInfo: IUserPost = {email, username, password};
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userInfo)
            };
            await fetch(`http://localhost:5000/signup`, requestOptions);
        } catch (e) {
            console.log(e);
        }
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
                <form onSubmit={signup}>
                    <FormControl fullWidth>
                        <TextField sx={{my: 1}} id="email" label="E-mail" name="email" variant="standard" type="email"
                                   value={email} onChange={(e) => setEmail(e.target.value)}
                                   InputProps={{
                                       endAdornment: (
                                           <InputAdornment position="start">
                                               <MailOutlineIcon/>
                                           </InputAdornment>
                                       ),
                                   }}/>
                        <TextField sx={{my: 1}} id="username" label="Username" variant="standard"
                                   value={username} onChange={(e) => setUsername(e.target.value)}
                                   InputProps={{
                                       endAdornment: (
                                           <InputAdornment position="start">
                                               <PersonPinIcon/>
                                           </InputAdornment>
                                       ),
                                   }}/>
                        <TextField sx={{my: 1}} id="password" label="Password" variant="standard" type="password"
                                   value={password} onChange={(e) => setPassword(e.target.value)}
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
