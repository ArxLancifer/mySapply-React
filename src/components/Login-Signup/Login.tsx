import {Box, Button, FormControl, InputAdornment, TextField} from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import {Container} from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <Container maxWidth="xs">
            <form>
                <FormControl fullWidth>
                <TextField sx={{ my: 1 }} id="email" label="E-mail" variant="standard" type="email" InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon />
            </InputAdornment>
          ),
        }} />
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
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>
                </Box>
                <Link to="/signup">
                    Κάνε την εγγραφή σου
                </Link>
            </form>
        </Container>
    )
}

export default Login
