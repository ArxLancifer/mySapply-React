import React, {useState} from 'react'
import { Container, FormControl, TextField, Box, Button, InputAdornment } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonPinIcon from '@mui/icons-material/PersonPin';




function Signup() {

    const [userInfo, setUserInfo] = useState("")


    function signup(e: any){
      console.log(e.target);
    }

    return (
        <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            px:4,
            transform: "translate(-50%, -50%)",
            width: "60vw",
            height:"50vh",
            borderRadius:1 , 
            boxShadow: 3,
        }}>
        <Container maxWidth="xs">
            <form>
                <FormControl fullWidth>
                    <TextField sx={{ my: 1 }} id="email" label="E-mail" name="email" variant="standard" type="email" InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon />
            </InputAdornment>
          ),
        }} />
                    <TextField sx={{ my: 1 }} id="username" label="Username" variant="standard" InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <PersonPinIcon />
            </InputAdornment>
          ),
        }}/>
                    <TextField sx={{ my: 1 }} id="password" label="Password" variant="standard" type="password" InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <LockOpenIcon />
            </InputAdornment>
          ),
        }}/>
                </FormControl>
                <Box sx={{ textAlign: "end" }}>
                    <Button
                        sx={{ mt: 1 }}
                        size="medium"
                        type="button"
                        variant="contained"
                        color="primary"
                        onClick={signup}
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
