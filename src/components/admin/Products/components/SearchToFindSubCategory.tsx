import {Autocomplete, AutocompleteValue, Container, TextField} from "@mui/material";
import React, {SyntheticEvent, useEffect, useState} from "react";
import {IProductSubCategory} from "../../../../interfaces/ICategory";
import axios from "axios";

function SearchToFindSubCategory<T>(props: {
    getProductsFromSubCategory: (data: T[]) => void,
    loading: (data: boolean) => void,
    getSubCategory: (data: IProductSubCategory) => void
}) {
    const [options, setOptions] = useState<any[]>([]);
    const getSubCategories = async () => {
        const subCategoriesData = await axios.get(`http://localhost:5500/admin/products/sub-categories`);
        const productsTitles = (subCategoriesData.data as IProductSubCategory[]).map(sb => {
            return {
                label: sb.title,
                slug: sb.slug
            }
        });
        setOptions(productsTitles);
    };

    const handleSearch = async (event: SyntheticEvent, value: AutocompleteValue<any, any, any, any>) => {
        if (!value) {
            return props.getProductsFromSubCategory([]);
        }
        props.loading(true);
        const productsData = await axios.get(`http://localhost:5500/admin/products/${value?.slug}`, {withCredentials: true});
        if (productsData.status === 200) {
            props.getProductsFromSubCategory(productsData.data.allProducts);
            props.getSubCategory(productsData.data.subCategory);
        }
        props.loading(false);
    };

    useEffect(() => {
        getSubCategories()
    }, []);

    return (
        <>
            <form>
                <Container maxWidth="sm">
                    <Autocomplete
                        size="small"
                        sx={{
                            width: "100%",
                            fieldset: {
                                border: "1px solid #ccc",
                                borderRadius: "50px",
                            },
                            my: 4
                        }}
                        disablePortal
                        id="combo-box-demo"
                        options={options}
                        renderInput={(params) => <TextField {...params} label="Αναζήτησε μια υποκατηγορία"/>}
                        onChange={(event, value) => handleSearch(event, value)}
                    />
                </Container>
            </form>
        </>
    )
}

export default SearchToFindSubCategory;
