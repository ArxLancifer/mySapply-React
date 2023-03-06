import React from "react";
import {IAlcoholDrink} from "../../../interfaces/IAlcoholDrink";
import {Box, Container, Typography} from "@mui/material";
import {IProductCategory, IProductSubCategory} from "../../../interfaces/ICategory";
import {Link} from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
                borderRadius: "8px",
                backgroundColor: "white",
                boxShadow: "0px 0px 10px -1px rgba(219,219,219,0.6)",
                display: "flex",
                flexDirection: {xs: "row", lg: "column"},
                justifyContent: "space-around",
                alignItems: {xs: "center", lg: "baseline"},
                width: "100%",
                border: "1px solid #e8e8e8",
                py: 2
            }}>
                <Container>
                    <Box sx={{display: "flex", justifyContent: "end"}}>
                        <FavoriteBorderIcon sx={{color: "#707070"}} />
                    </Box>
                    <Box sx={{width: "160px", mx: "auto", my: 2}}>
                        <img style={{width: "100%"}} src="https://www.thecocktaildb.com/images/ingredients/vodka.png"
                             alt=""/>
                    </Box>
                    <Box sx={{width: "100%", flexGrow: 1}}>
                        <Typography sx={{color: "#363636", fontWeight: 400, lineHeight: "19px", fontSize: "0.8rem"}} variant="subtitle1">
                            {alcoholDrink.brandName}
                        </Typography>
                        <Box>
                            {/*<Typography variant="h5" component="h5">{alcoholDrink.brandName}</Typography>*/}
                            <Typography sx={{height: "30px", overflow: "hidden", textOverflow: "ellipsis", fontSize: "1.2rem"}}>
                                {alcoholDrink.title}
                            </Typography>
                        </Box>
                        <Typography sx={{color: "#707070", fontSize: "14px", lineHeight: "18px"}}>
                            Βάρος: {alcoholDrink.weightML || 0} mL, Vol : {alcoholDrink.alcoholVol || 0} %
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{mt: 2, fontWeight: "bold", fontSize: "1.4rem"}} variant="h6">
                            {alcoholDrink.price || 0} €
                        </Typography>
                    </Box>
                    <Typography sx={{mt: 1, color: "#707070", fontSize: "0.8rem"}}>
                        στο mySapply
                    </Typography>
                    <Typography sx={{color: "#295f27", fontSize: "0.8rem"}}>
                        με express παράδοση
                    </Typography>
                </Container>
            </Box>
        </Link>
    )
}

export default AlcoholDrinks;
