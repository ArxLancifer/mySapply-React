import {Container, Divider, Typography} from "@mui/material";
import {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {IProduct} from "../../interfaces/IAlcoholDrink";
import AddToCart from "./components/AddToCart";
import SearchProduct from "./components/SearchProduct";
import { Box } from "@mui/system";

function Product() {
    const {slug} = useParams<{ slug: string }>();
    const [product, setProduct] = useState<Partial<IProduct>>({});
    const getProductBySlug = async () => {
        const response = await axios({method: "GET", url: `http://localhost:5500/products/${slug}`});
        setProduct((response.data || {}));
    };

   
    useEffect(() => {
        getProductBySlug();
    }, []);

    return (
        <Fragment>
        <Container>
            <SearchProduct changeProduct={setProduct} />
            <Box sx={{display:"flex", flexDirection:{xs:"column", lg:"row"}, alignItems:"center",  justifyContent:{xs:"center", lg:"space-around"}, pt:10}}>
                <Box sx={{ width:"50%"}}>
                    <img style={{width:"100%"}} src="https://www.thecocktaildb.com/images/ingredients/gin.png" alt="" />
                </Box>
                <Box sx={{ width:"40%"}}>
                    <Typography variant="h3" component={"h3"}>{product.brandName}</Typography>
                    <Typography variant="h5" >{product.title}</Typography>
                    <Divider />
                    <Box sx={{mt:5}}>
                        <Typography variant="subtitle1"><strong>Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam velit dolorum nulla cupiditate dolore aperiam odit quos quae placeat alias!</Typography>
                        <Typography mt={5} variant="h6">Price:{ product.price } €</Typography>
                        {/* <Typography variant="overline">{product.subCategory}</Typography> */}
                    </Box>
                </Box>
            </Box>
            {/* <Container>
                <Typography variant="h5">
                    {product?.brandName}
                </Typography>
                <Typography variant="body1">
                    {product?.title}
                </Typography>
                <Typography variant="body1">
                    {product?.price}
                </Typography>
            </Container> */}
        </Container>
        <AddToCart product={product} />
        </Fragment>
    )
}

export default Product;
