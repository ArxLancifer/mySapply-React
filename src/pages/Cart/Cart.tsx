import {Container, Typography} from "@mui/material";

function Cart() {
    return (
        <Container>
            <Typography sx={{fontWeight: "bold", mt: 3}} variant="h5">
                Το καλάθι σου
            </Typography>
        </Container>
    )
}

export default Cart;
