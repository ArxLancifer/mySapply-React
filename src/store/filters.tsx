import {createSlice, PayloadAction} from '@reduxjs/toolkit';
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
        getSubCategorySlugs: (state, action) => {
            state.products = action.payload.filteredItems;
        }
    },
});

export const filtersActions = filtersSlice.actions;
export default filtersSlice.reducer;
