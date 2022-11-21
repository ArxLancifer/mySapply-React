import {Box, Button, FormControl, TextField} from '@mui/material'
import {Container} from '@mui/system'
import React from 'react'

function LogSign() {
    return (
        <Container maxWidth="xs">
            <form>
                <FormControl fullWidth>
                    <TextField sx={{my: 1}} id="username" label="Username" variant="standard"/>
                    <TextField sx={{my: 1}} id="password" label="Password" variant="standard"/>
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

export default LogSign
