import {createSlice} from '@reduxjs/toolkit';
import {IProduct} from "../interfaces/IAlcoholDrink";

export interface filterState {
    products: IProduct[];
}

// Define the initial state using that type
const initialState: filterState = {
    products: []
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        getSubCategoryProducts: (state, action) => {
            state.products = action.payload;
        }
    },
});

export const {getSubCategoryProducts} = filtersSlice.actions;
export default filtersSlice.reducer;
