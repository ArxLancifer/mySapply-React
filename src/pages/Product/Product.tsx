import {Container, Typography} from "@mui/material";
import {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {IProduct} from "../../interfaces/IAlcoholDrink";
import AddToCart from "./components/AddToCart";
import SearchProduct from "./components/SearchProduct";

function Product() {
    const {slug} = useParams<{ slug: string }>();
    const [product, setProduct] = useState<Partial<IProduct>>({});
    const getProductBySlug = async () => {
        const response = await axios({method: "GET", url: `http://localhost:5500/products/${slug}`});
        setProduct((response.data || {}));
    };

    const getValueFromSearch = (product: Object) => {
        setProduct(product);
    }

    useEffect(() => {
        getProductBySlug();
    }, []);

    return (
        <Fragment>
            <SearchProduct changeProduct={getValueFromSearch} />
            <Container>
                <Typography variant="h5">
                    {product?.brandName}
                </Typography>
                <Typography variant="body1">
                    {product?.title}
                </Typography>
                <Typography variant="body1">
                    {product?.price}
                </Typography>
            </Container>
            <AddToCart product={product} />
        </Fragment>
    )
}

export default Product;
