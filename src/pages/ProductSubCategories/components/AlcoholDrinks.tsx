import React from "react";
import {IAlcoholDrink} from "../../../interfaces/IAlcoholDrink";
import {Box, Grid, Typography} from "@mui/material";
import {IProductCategory, IProductSubCategory} from "../../../interfaces/ICategory";
import {Link} from "react-router-dom";

type Props = {
    alcoholDrink: IAlcoholDrink;
    productSubCategory: IProductSubCategory
}

function AlcoholDrinks({alcoholDrink, productSubCategory}: Props) {
    return (
        <Grid item xs={4} sx={{
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "0px 0px 10px -1px rgba(219,219,219,0.6)",
            display: "flex",
            alignItems: "center"
        }}>
            <Link
                className="link-style"
                to={`/products/${(productSubCategory?.category as IProductCategory)?.slug}/${productSubCategory?.slug}/${alcoholDrink?.slug}`}
            >
                <Box sx={{
                    display: "inline-flex"
                }}>
                    <Box sx={{
                        background: "red",
                        width:"85px",
                        height:"85px",
                        // borderRadius: "50%",
                        // color: "#ccc",
                        // display: "flex",
                        // justifyContent: "center",
                        // alignItems: "center",
                        // mx: 4,
                    }}>
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
            </Link>
        </Grid>
    )
}

export default AlcoholDrinks;
