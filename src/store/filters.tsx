import { createSlice } from '@reduxjs/toolkit';

interface filterState {
    subCategoriesSlugs: string[];
}

// Define the initial state using that type
const initialState: filterState = {
    subCategoriesSlugs: [],
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
    getSubCategorySlugs:  (state, action) => {
            // const selectedProduct = await 
        },

    },
});

export const filtersActions = filtersSlice.actions;
export default filtersSlice.reducer;
