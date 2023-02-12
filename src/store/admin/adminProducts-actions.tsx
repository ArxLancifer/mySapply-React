import {IProductSubCategory} from "../../interfaces/ICategory";
import {adminProductsActions} from "./AdminProducts";
import axios, {AxiosResponse} from "axios";
import {FormEvent, SyntheticEvent} from "react";
import {AutocompleteValue} from "@mui/material";
import {IProduct} from "../../interfaces/IAlcoholDrink";

export const getSubCategoriesData = () => {
    return async (dispatch: any) => {
        const fetchData = async () => {
            const subCategoriesData = await axios.get(`http://localhost:5500/admin/products/sub-categories`);
            return (subCategoriesData.data as IProductSubCategory[]).map(sb => {
                return {
                    label: sb.title,
                    slug: sb.slug
                }
            });
        };

        try {
            const subCategories = await fetchData();
            dispatch(adminProductsActions.getSubCategories(subCategories));
        } catch (err) {
            console.log(err);
        }
    };
};

export const handleSearchData = (event: SyntheticEvent, value: AutocompleteValue<any, any, any, any>) => {
    return async (dispatch: any) => {
        const fetchData = async () => {
            if (!value) {
                console.log("No value");
            }
            return await axios.get(`http://localhost:5500/admin/products/${value?.slug}`, {withCredentials: true});
        };

        try {
            const productsData: AxiosResponse<{allProducts: IProduct[]; subCategory: IProductSubCategory}> = await fetchData();
            dispatch(adminProductsActions.getProducts({
                allProducts: productsData.data.allProducts,
                subCategory: productsData.data.subCategory
            }));
        } catch (err) {
            console.log(err);
        }
    };
};

const baseUrl = "http://localhost:5500/admin/products";
export const createNewProduct = (event: FormEvent<HTMLFormElement>, value: AutocompleteValue<any, any, any, any>) => {
    return async (dispatch: any) => {
        const create = async () => {
            try {
                const response = await axios.post(`${baseUrl}`, value);
                if(response.status === 200) {
                    // handleClose();
                }
            } catch (e) {
                console.log(e);
            }
        };

        try {
            await create();
            dispatch(adminProductsActions.handleClose);
        } catch (err) {
            console.log(err);
        }
    };
};
