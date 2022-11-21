import { Container, FormControl, TextField, Box, Button, InputAdornment } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import React from 'react'

function Signup() {
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
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>
                </Box>
            </form>
        </Container>
    )
}

export default Signup
