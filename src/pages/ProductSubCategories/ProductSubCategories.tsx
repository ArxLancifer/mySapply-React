import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IProductSubCategory} from "../../interfaces/ICategory";
import {IAlcoholDrink} from "../../interfaces/IAlcoholDrink";
import {Container, Typography} from "@mui/material";
import AlcoholDrinks from "./components/AlcoholDrinks";

function ProductSubCategories() {
    const baseUrl = `products/sub-categories`;
    const subCategorySlug = useParams<{ slug: string }>();
    const [productSubCategory, setProductSubCategory] = useState<Partial<IProductSubCategory>>({});
    const [alcoholDrinks, setAlcoholDrinks] = useState<{ drinks: IAlcoholDrink[], countOfDrinks: number }>({
        drinks: [],
        countOfDrinks: 0
    });
    const getProductSubCategoryBySlug = async () => {
        try {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            };
            const data = await fetch(`http://localhost:5500/${baseUrl}/${subCategorySlug.slug}`, requestOptions);
            const productSubCategory: IProductSubCategory = await data.json();
            setProductSubCategory(productSubCategory);
        } catch (e) {
            console.log(e);
        }
    };
    const getAlcoholDrinksBySubCategory = async () => {
        try {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            };
            const data = await fetch(`http://localhost:5500/products/${subCategorySlug?.slug}/alcohol-drinks`, requestOptions);
            const alcoholDrinks: { drinks: IAlcoholDrink[], countOfDrinks: number } = await data.json();
            setAlcoholDrinks(alcoholDrinks);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getProductSubCategoryBySlug();
        getAlcoholDrinksBySubCategory();
    }, []);

    return (
        <Container>
            <Typography sx={{mt: 3, mb: 1, fontSize: "2rem"}} variant="h3">
                {productSubCategory.title}
            </Typography>
            {
                alcoholDrinks.countOfDrinks > 0 &&
                <Typography sx={{color: "#363636"}} variant="body2">
                    {alcoholDrinks?.countOfDrinks} Προϊόντα
                </Typography>
            }
            {alcoholDrinks.drinks?.length ?
                alcoholDrinks.drinks.map((drink, index) => (
                    <AlcoholDrinks key={index} AlcoholDrink={drink}/>
                )) :
                <Typography>
                    Δεν υπάρχουν προϊόντα
                </Typography>
            }
        </Container>
    )
}

export default ProductSubCategories;
