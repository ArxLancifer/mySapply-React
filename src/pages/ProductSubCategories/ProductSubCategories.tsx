import React, {useCallback, useEffect, useMemo,} from "react";
import { useLocation} from "react-router-dom";
import { IProductSubCategory } from "../../interfaces/ICategory";
import { IAlcoholDrink } from "../../interfaces/IAlcoholDrink";
import { Container, Typography } from "@mui/material";
import AlcoholDrinks from "./components/AlcoholDrinks";
import Filters from "./components/Filters";
import "../../index.css";
import { Box } from "@mui/system";
import FilterProducts from "../../components/admin/Products/components/FilterProducts";
import { useSelector, useDispatch } from "react-redux";
import {filterState, getProductPrices, getSubCategoryProducts} from "../../store/filters";
import axios, {AxiosResponse} from "axios";

const productLayout = {
    width: "76%",
    display: { xs: "grid" },
    gridTemplateColumns: { md: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" },
    gridAutoRows: { xs: "20vh", lg: "40vh" },
    gap: 3,
};

function ProductSubCategories() {
    const dispatch = useDispatch();
    const location = useLocation();

    const filteredProducts = useSelector<{ filters: filterState }>((state) => state.filters.products) as IAlcoholDrink[];
    const {filters, filterChanged} = useSelector<{ filters: filterState }>((state) => state?.filters) as filterState;

    console.log(filters);
    const callback = useCallback(() => {
        return filters;
    }, []);

    const getProductSubCategoryBySlug = async () => {
        try {
            const productSubCategoryData: AxiosResponse<{allProducts: IAlcoholDrink[], prices: number[]}> = await axios.post(
                `http://localhost:5500${location.pathname}`,
                {filters, filterChanged: filterChanged}
            );
            dispatch(getSubCategoryProducts(productSubCategoryData.data.allProducts));
            dispatch(getProductPrices(productSubCategoryData.data.prices));
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getProductSubCategoryBySlug();
    }, [callback]);

    return (
        <Container maxWidth="xl" sx={{ p: 2 }}>
            <Typography sx={{ mt: 3, mb: 1, fontSize: "2rem" }} variant="h3">
                {(filteredProducts[0]?.subCategory as IProductSubCategory)?.title}
            </Typography>
            {filteredProducts?.length > 0 && (
                <Typography sx={{ color: "#363636" }} variant="body2">
                    {filteredProducts?.length} Προϊόντα
                </Typography>
            )}
            <Box sx={{ display: "flex", mt: 4 }}>
                <Box
                    sx={{
                        width: "24%",
                        boxShadow: "0px 0px 10px -1px rgba(219,219,219,0.6)",
                        mr: 2,
                        p: 2,
                    }}
                >
                    <FilterProducts />
                </Box>
                <Box sx={productLayout}>
                    {filteredProducts?.length ? (
                        filteredProducts.map((drink, index) => (
                            <AlcoholDrinks
                                key={index}
                                productSubCategory={drink.subCategory as IProductSubCategory}
                                alcoholDrink={drink}
                            />
                        ))
                    ) : (
                        <Typography>Δεν υπάρχουν προϊόντα</Typography>
                    )}
                </Box>
            </Box>
            <Filters />
        </Container>
    );
}

export default ProductSubCategories;
