import {Box, Button, FormControl, InputAdornment, TextField, Typography} from '@mui/material'
import './Login-Signup.module.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {Container} from '@mui/system';
import {Link, useNavigate} from 'react-router-dom';
import LoginWithOneTap from "../../components/Login-Signup/LoginWithOneTap";
import {useContext, useState} from 'react';
import {IUserPost} from '../../interfaces/IUser';
import AuthContext from "../../components/store/auth/AuthContext";

function Login() {
    const {login} = useContext(AuthContext);

    const [userInput, setUserInput] = useState<IUserPost>({username: "", password: ""});

    function handleInput(e: any) {
        const inputField = e.target.id
        setUserInput({
            ...userInput,
            [inputField]: e.target.value
        });
    }

    return (
        <Container maxWidth="sm">
            <Box sx={{backgroundColor: "white", boxShadow: 1, mt: 5, px: {xs: 3, lg: 8}, py: {xs: 4, lg: 6}}}>
                <Typography sx={{textAlign: "center", fontWeight: "bold"}} variant="body1">
                    Συνέχεια με τον λογαριασμό σου
                </Typography>
                <Typography sx={{textAlign: "center", mt: 2, mb: 4, color: "#707070"}}  variant="body2">
                    Κάνε σύνδεση ή εγγραφή με έναν από τους παρακάτω τρόπους.
                </Typography>
                <form onSubmit={(event) => login(event, userInput.username, userInput.password)}>
                    <FormControl fullWidth>
                        <TextField sx={{my: 1}} id="username" label="Username" variant="filled" type="text"
                                   onChange={handleInput} InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <MailOutlineIcon/>
                                </InputAdornment>
                            ),
                        }}/>
                        <TextField sx={{my: 1}} id="password" label="Password" variant="filled" type="password"
                                   onChange={handleInput}
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
                <Box sx={{textAlign: "center", m: 3}}>
                    <Link style={{textDecoration: "none", color: "#1976d2"}} to="/signup">
                        Κάνε την εγγραφή σου
                    </Link>
                </Box>
                <LoginWithOneTap/>
            </Box>
        </Container>
    )
}

export default Login
