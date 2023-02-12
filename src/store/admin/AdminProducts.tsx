import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProductCategory, IProductSubCategory} from "../../interfaces/ICategory";
import {IProduct} from "../../interfaces/IAlcoholDrink";

export interface AdminProductState {
    subCategories: IProductSubCategory[];
    products: Partial<IProduct[]>;
    subCategory: Partial<IProductSubCategory>;
    categories: IProductCategory[];
    isShow: boolean;
}

// Define the initial state using that type
const initialState: AdminProductState = {
    subCategories: [],
    products: [],
    subCategory: {},
    categories: [],
    isShow: false
}

const adminProductsSlice = createSlice({
    name: 'adminProducts',
    initialState,
    reducers: {
        getSubCategories: (state, action) => {
            state.subCategories = action.payload;
        },
        getProducts: (state, action: PayloadAction<{allProducts: IProduct[]; subCategory: IProductSubCategory}>) => {
            state.products = action.payload.allProducts;
            state.products.map(product => {
                return {
                    _id: product?._id,
                    subCategory: (product?.subCategory as IProductSubCategory)?.title,
                    brandName: product?.brandName,
                    alcoholVol: product?.alcoholVol,
                    weightML: product?.weightML,
                    price: product?.price,
                    slug: product?.slug,
                    collectionType: product?.collectionType,
                }
            });
            state.subCategory = action.payload.subCategory;
        },
        handleClose: (state, action) => {
            state.isShow = action.payload;
        }
    },
});

export const adminProductsActions = adminProductsSlice.actions;
export default  adminProductsSlice.reducer;
