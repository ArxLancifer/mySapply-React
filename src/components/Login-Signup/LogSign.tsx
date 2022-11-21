import { Label } from '@mui/icons-material'
import { FilledInput, FormControl, TextField } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

function LogSign() {
  return (
    <div>
        <Container maxWidth="xs">
      <FormControl fullWidth>
      <TextField sx={{my:1}} id="username" label="Username" variant="standard" />
      <TextField sx={{my:1}} id="password" label="Password" variant="standard" />
    </FormControl>
    </Container>
    </div>
  )
}

export default LogSign
