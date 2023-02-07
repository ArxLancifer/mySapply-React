import { configureStore } from "@reduxjs/toolkit";

import filtersReducer from "./filters";

const store = configureStore({
    reducer: {filters: filtersReducer}
});

export default store;

