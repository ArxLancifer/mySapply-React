import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from "../interfaces/IAlcoholDrink";

export interface filterState {
    products: IProduct[];
    prices: number[];
    minPrice: number;
    maxPrice: number;
    filters: {
        priceRange: [number, number];
    };
}

// Define the initial state using that type
const initialState: filterState = {
    products: [],
    prices: [],
    minPrice: 0,
    maxPrice: 0,
    filters: {
        priceRange: [0, 0]
    }
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        getSubCategoryProducts: (state, action) => {
            state.products = action.payload;
        },
        getProductPrices: (state, action) => {
            state.prices = action.payload;

            if (state.minPrice === 0 && state.maxPrice === 0) {
                state.minPrice = Math.min(...state.prices);
                state.maxPrice = Math.max(...state.prices);
                state.filters.priceRange = [state.minPrice, state.maxPrice];
            }
        },
        getProductsByPriceRange: (state, action: PayloadAction<{min: number, max: number}>) => {
            state.filters.priceRange[0] = action.payload.min;
            state.filters.priceRange[1] = action.payload.max;
        }
    },
});

export const {getSubCategoryProducts, getProductPrices, getProductsByPriceRange} = filtersSlice.actions;
export default filtersSlice.reducer;
