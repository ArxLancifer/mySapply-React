import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

import filtersReducer from "./filters";
import adminProductsReducer from "./admin/AdminProducts";
import axios from "axios";

const store = configureStore({
    reducer: {
        filters: filtersReducer,
        adminProducts: adminProductsReducer
    },  middleware: getDefaultMiddleware({
        thunk: {
            extraArgument: axios,
        },
    }),
});

export default store;

