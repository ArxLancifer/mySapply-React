import React, {Fragment, useEffect, useState} from "react";
import {IProductCategory} from "../../interfaces/ICategory";
import {Box} from "@mui/material";
import {useParams} from "react-router-dom";
import ProductSubCategoriesBoxes from "./components/ProductSubCategoriesBoxes";
import MoreProductCategories from "./components/MoreProductCategories";

function ProductCategories() {
    const {slug} = useParams<{ slug: string }>();
    const baseUrl = `products/categories`;
    const [productCategory, setProductCategory] = useState<Partial<IProductCategory>>({});
    const [productCategories, setProductCategories] = useState<IProductCategory[]>([]);
    const getProductCategoryBySlug = async () => {
        try {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            };
            const data = await fetch(`http://localhost:5500/${baseUrl}/${slug}`, requestOptions);
            const productCategory: IProductCategory = await data.json();
            setProductCategory(productCategory);
        } catch (e) {
            console.log(e);
        }
    };

    const getProductCategories = async () => {
        try {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            };
            const data = await fetch(`http://localhost:5500/${baseUrl}`, requestOptions);
            const productCategory: IProductCategory[] = await data.json();
            setProductCategories(productCategory);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getProductCategoryBySlug();
        getProductCategories();
    }, [slug]);


    return (
        <Fragment>
            <Box sx={{textAlign: "center", backgroundColor: "#1d84b0", color: "white", pt: 5, pb: 15, mt: 5}}>
                <h2>{productCategory.title}</h2>
            </Box>
            <ProductSubCategoriesBoxes
                subCategories={productCategory.subCategories}
            />
            <Box sx={{ mt: 8, mb: 8, backgroundColor: "#f1f1f1", py: 5 }}>
                <MoreProductCategories
                    title="Kατηγορίες"
                    categories={productCategories}
                    buttonText="Δες όλες τις κατηγορίες"
                />
            </Box>
        </Fragment>
    )
}

export default ProductCategories;
