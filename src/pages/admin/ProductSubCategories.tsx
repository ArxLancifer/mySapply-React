import React from 'react';
import {Container} from "@mui/material";
import ProductSubCategoryForm from "../../components/admin/ProductSubCategoryForm";
import TableOfItems from "../../components/admin/components/TableOfItems";

function ProductSubCategories() {
    return (
        <>
            <Container maxWidth="sm">
                <ProductSubCategoryForm />
            </Container>
            <Container>
                <TableOfItems />
            </Container>
        </>
    )
}
export default ProductSubCategories;
