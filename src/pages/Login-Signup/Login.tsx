import {Box, Button, FormControl, InputAdornment, TextField} from '@mui/material'
import './Login-Signup.module.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {Container} from '@mui/system';
import {Link, useNavigate} from 'react-router-dom';
import LoginWithOneTap from "../../components/Login-Signup/LoginWithOneTap";
import {  useEffect, useState } from 'react';




function Login() {

  
    interface IUserPost {
        username: string;
        password: string;
    }
        

    const navigate = useNavigate()
    const [userInput, setUserInput] = useState<IUserPost>({username:"", password:""})
    const [user , setUser] = useState<{username:string}>({username:"Not user yet"})
    

    function handleInput(e:any){
        const inputField = e.target.id
        setUserInput({
            ...userInput,
           [inputField]:e.target.value
        })
    }
    

    async function logMeIn(e?:any){
       
        e.preventDefault()
        const reqLoginData: IUserPost = userInput;
        const userAuthData = await fetch("http://localhost:5500/login",{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(reqLoginData),
            credentials: 'include'
        })
        
        const userData = await userAuthData.json();
        console.log(userData)
       setUser(userData.username)
        
        
    }

    // useEffect(()=>{
    //     if(user.username !== "Not user yet"){
    //         navigate("/")
    //     }
    // }, [user])
    

    return (
        <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            p:4,
            transform: "translate(-50%, -50%)",
            width: "60vw",
            height:"50vh",
            borderRadius:1 , 
            boxShadow: 3
        }}>
            <Container maxWidth="xs">
                <form>
                    <FormControl fullWidth>
                        <TextField sx={{my: 1}} id="username" label="Username" variant="filled" type="email" onChange={handleInput} InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <MailOutlineIcon/>
                                </InputAdornment>
                            ),
                        }}/>
                        <TextField sx={{my: 1}} id="password" label="Password" variant="filled" type="password" onChange={handleInput}
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
                            onClick={logMeIn}
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
            </Container>
            <p>{JSON.stringify(user)}</p>
        </Box>
    )
}

export default Login
