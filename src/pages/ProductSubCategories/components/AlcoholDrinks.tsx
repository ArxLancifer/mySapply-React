import React from "react";
import {IAlcoholDrink} from "../../../interfaces/IAlcoholDrink";
import {Box, Grid, Typography} from "@mui/material";

type Props = {
    alcoholDrink: IAlcoholDrink;
}

function AlcoholDrinks({alcoholDrink}: Props) {
    return (
        <Grid item xs={12} lg={4} sx={{
            borderRadius: "10px",
            height: "120px",
            backgroundColor: "white",
            boxShadow: "0px 0px 10px -1px rgba(219,219,219,0.6)",
            display: "flex",
            alignItems: "center"
        }}>
            <Box sx={{
                display: "inline-flex"
            }}>
                <Box sx={{
                    background: "#ccc",
                    borderRadius: "50%",
                    height: "100px",
                    width: "100px",
                    color: "#ccc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: 4,
                }}>
                    image
                </Box>
                <Box>
                    <Typography>
                        {alcoholDrink.brandName}
                    </Typography>
                    <Typography sx={{mt: 1, color: "#707070", fontSize: ".9rem"}}>
                        {alcoholDrink.title}
                    </Typography>
                    <Typography sx={{fontWeight: "bold", fontSize: "1.3rem"}}>
                        {alcoholDrink.price} $
                    </Typography>
                </Box>
            </Box>
        </Grid>
    )
}

export default AlcoholDrinks;
