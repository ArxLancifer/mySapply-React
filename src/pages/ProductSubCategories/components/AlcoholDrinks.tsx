import React from "react";
import {IAlcoholDrink} from "../../../interfaces/IAlcoholDrink";
import {Box, Typography} from "@mui/material";
import {IProductCategory, IProductSubCategory} from "../../../interfaces/ICategory";
import {Link} from "react-router-dom";

type Props = {
    alcoholDrink: IAlcoholDrink;
    productSubCategory: IProductSubCategory
}

function AlcoholDrinks({alcoholDrink, productSubCategory}: Props) {

    return (
        <Link
            className="link-style"
            to={`/products/${(productSubCategory?.category as IProductCategory)?.slug}/${productSubCategory?.slug}/${alcoholDrink?.slug}`}
        >
            <Box sx={{
                borderRadius: "10px",
                backgroundColor: "white",
                boxShadow: "0px 0px 10px -1px rgba(219,219,219,0.6)",
                display: "flex",
                flexDirection: {xs: "row", lg: "column"},
                justifyContent: "space-around",
                alignItems: {xs: "center", lg: "baseline"},
                height: "100%",
                width: "100%",
            }}>
                <Box sx={{width: "160px", mx: "auto", my: 2}}>
                    <img style={{width: "100%"}} src="https://www.thecocktaildb.com/images/ingredients/vodka.png"
                         alt=""/>
                </Box>
                <Box sx={{width: "100%", flexGrow: 1}}>
                    <Box sx={{textAlign: {xs: "start", lg: "center"}}}>
                        <Typography variant="h5" component="h5">{alcoholDrink.brandName}</Typography>
                        <Typography sx={{height: "30px", overflow: "hidden", textOverflow: "ellipsis"}} variant="h6"
                                    component="h6">{alcoholDrink.title}</Typography>
                    </Box>
                    <Typography sx={{ml: 2, mt: 2, color: "#707070"}} variant="subtitle2">Βάρος: {alcoholDrink.weightML || 0} mL</Typography>
                    <Typography sx={{ml: 2, color: "#707070"}} variant="subtitle2">Vol : {alcoholDrink.alcoholVol || 0} %</Typography>
                </Box>
                <Box>
                    <Typography sx={{mb: 2, ml: 2, fontWeight: "bold"}} variant="h6">{alcoholDrink.price || 0} €</Typography>
                </Box>
            </Box>
        </Link>
    )
}

export default AlcoholDrinks;
