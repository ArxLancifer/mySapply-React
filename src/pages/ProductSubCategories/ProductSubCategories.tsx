import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import {IProductSubCategory } from "../../interfaces/ICategory";
import { IAlcoholDrink } from "../../interfaces/IAlcoholDrink";
import { Container,Typography } from "@mui/material";
import AlcoholDrinks from "./components/AlcoholDrinks";
import Filters from "./components/Filters";
import "../../index.css";
import { Box } from "@mui/system";
import FilterProducts from "../../components/admin/Products/components/FilterProducts";
import {useSelector} from "react-redux";
import {filterState} from "../../store/filters";
import axios from "axios";

const productLayout = { width: "76%", display: { xs: "grid" }, gridTemplateColumns: { md: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }, gridAutoRows: {xs:"20vh", lg:"40vh"}, gap: 3 }

function ProductSubCategories() {
    const baseUrl = `products/sub-categories`;
    const subCategorySlug = useParams<{ slug: string }>();
    const [productSubCategory, setProductSubCategory] = useState<Partial<IProductSubCategory>>({});
    const filteredProducts = useSelector<{filters: filterState}>(state => state.filters.products) as IAlcoholDrink[];

    const getProductSubCategoryBySlug = async () => {
        try {
            const productSubCategoryData = await axios.get(`http://localhost:5500/${baseUrl}/${subCategorySlug.slug}`);
            setProductSubCategory(productSubCategoryData.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (!filteredProducts?.length) {
            getProductSubCategoryBySlug();
        }
    }, [filteredProducts]);

    return (
        <Container maxWidth="xl" sx={{ p: 2 }}>
            <Typography sx={{ mt: 3, mb: 1, fontSize: "2rem" }} variant="h3">
                {productSubCategory.title}
            </Typography>
            {
                filteredProducts?.length > 0 &&
                <Typography sx={{ color: "#363636" }} variant="body2">
                    {filteredProducts?.length} Προϊόντα
                </Typography>
            }
            <Box sx={{ display: "flex", mt: 4 }}>
                <Box sx={{ width: "24%", boxShadow: "0px 0px 10px -1px rgba(219,219,219,0.6)", mr: 2, p: 2 }}>
                    <FilterProducts />
                </Box>
                <Box sx={productLayout}>
                    {filteredProducts?.length ?
                        filteredProducts.map((drink, index) => (
                            <AlcoholDrinks key={index} productSubCategory={(productSubCategory as IProductSubCategory)} alcoholDrink={drink} />
                        )) :
                        <Typography>
                            Δεν υπάρχουν προϊόντα
                        </Typography>
                    }
                </Box>
            </Box>
            <Filters />
        </Container>
    )
}

export default ProductSubCategories;
