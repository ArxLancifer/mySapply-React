import React from "react";
import {IAlcoholDrink} from "../../../interfaces/IAlcoholDrink";
import {Box} from "@mui/material";

type Props = {
    AlcoholDrink: IAlcoholDrink;
}
function AlcoholDrinks({AlcoholDrink}: Props) {
    return (
        <Box sx={{mt: 5}}>
            {AlcoholDrink?.brandName}
        </Box>
    )
}

export default AlcoholDrinks;
