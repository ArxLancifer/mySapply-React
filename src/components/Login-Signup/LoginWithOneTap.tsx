import React from 'react';
import {Box, Button} from "@mui/material";

function LoginWithOneTap() {
    return (
        <Box>
            <Box sx={{ textAlign: "center", my: 5 }}>
                Σύνδεση με ένα πάτημα
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "space-evenly",
                mt: 3
            }}>
                <Box sx={{mx:1}}>
                    <Button color="error" variant="contained">
                        Google
                    </Button>
                </Box>
                <Box sx={{mx:1}}>
                    <Button color="primary" variant="contained">
                        Facebook
                    </Button>
                </Box>
                <Box sx={{mx:1}}>
                    <Button color="inherit" variant="contained">
                        Apple
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default LoginWithOneTap;
