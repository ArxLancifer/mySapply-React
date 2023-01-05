import {Box, Button, Container, Typography} from "@mui/material";
import {IProduct} from "../../../interfaces/IAlcoholDrink";

type Props = {
    product: Partial<IProduct>
}
function AddToCart({product}: Props) {
    return (
        <Box sx={{
            display: {sm: "block", lg: "none"},
            backgroundColor: "white",
            boxShadow: 3,
            position: "absolute",
            bottom: 0,
            width: "100%",
            py: 2,
            borderRadius: "15px 15px 0 0"
        }}>
            <Container sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Typography variant="body1">
                    {product?.price}
                </Typography>
                <Box>
                    <Button sx={{px: 5, backgroundColor: "#43993e"}} color={"success"} variant="contained">
                        Προσθήκη στο καλάθι
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default AddToCart;
