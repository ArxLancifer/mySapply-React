import React from 'react';
import {Box, Button} from "@mui/material";

function LoginWithOneTap() {
    return (
        <Box>
            <Box sx={{ textAlign: "center", mt: 7 }}>
                Σύνδεση με ένα πάτημα
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "space-evenly",
                mt: 3
            }}>
                <Box>
                    <Button color="error" variant="contained">
                        Google
                    </Button>
                </Box>
                <Box>
                    <Button color="primary" variant="contained">
                        Facebook
                    </Button>
                </Box>
                <Box>
                    <Button color="inherit" variant="contained">
                        Apple
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default LoginWithOneTap;
