import React, {useContext, useState} from "react";
import {IAlcoholDrink, IProduct} from "../../../interfaces/IAlcoholDrink";
import {Box, Container, Typography} from "@mui/material";
import {IProductCategory, IProductSubCategory} from "../../../interfaces/ICategory";
import {Link, useNavigate} from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios, {AxiosResponse} from "axios";
import AuthContext from "../../../components/store/auth/AuthContext";

type Props = {
    alcoholDrink: IAlcoholDrink;
    productSubCategory: IProductSubCategory
}

function AlcoholDrinks({alcoholDrink, productSubCategory}: Props) {
    const {user} = useContext(AuthContext);
    const [productId, setProductId] = useState<string>("");

    const onFavoriteIcon = async () => {
        const response: AxiosResponse<string> = await axios.post(`http://localhost:5500/favorites`, {product: alcoholDrink, userId: user._id});
        setProductId(response.data);
        if (!response.data) {
            user.favorites?.filter(f => f._id !== alcoholDrink._id);
        }
    };

    return (
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
                    {productId === alcoholDrink._id || user.favorites?.some(f  => f._id === alcoholDrink._id)
                        ? <FavoriteIcon sx={{color: "#DC3545", cursor: "pointer"}} onClick={onFavoriteIcon}/>
                        : <FavoriteBorderIcon sx={{color: "#707070", cursor: "pointer"}} onClick={onFavoriteIcon}/>
                    }
                </Box>
                <Link
                    className="link-style"
                    to={`/products/${(productSubCategory?.category as IProductCategory)?.slug}/${productSubCategory?.slug}/${alcoholDrink?.slug}`}
                >
                    <Box sx={{width: "160px", mx: "auto", my: 2}}>
                        <img style={{width: "100%"}} src="https://www.thecocktaildb.com/images/ingredients/vodka.png"
                             alt=""/>
                    </Box>
                </Link>
                <Box sx={{width: "100%", flexGrow: 1}}>
                    <Typography sx={{color: "#363636", fontWeight: 400, lineHeight: "19px", fontSize: "0.8rem"}}
                                variant="subtitle1">
                        {alcoholDrink.brandName}
                    </Typography>
                    <Box>
                        {/*<Typography variant="h5" component="h5">{alcoholDrink.brandName}</Typography>*/}
                        <Typography
                            sx={{height: "30px", overflow: "hidden", textOverflow: "ellipsis", fontSize: "1.2rem"}}>
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
    )
}

export default AlcoholDrinks;
