import React from 'react';
import {Container} from "@mui/material";
import TableOfItems from "../../components/admin/components/TableOfItems";

function ProductSubCategories() {
    return (
        <Container>
            <TableOfItems createButtonText="Δημιουργία υποκατηγορίας" />
        </Container>
    )
}
export default ProductSubCategories;
