import React from 'react';
import {Container} from "@mui/material";
import TableOfItems from "../../components/admin/components/TableOfItems";

function AdminProductSubCategories() {
    return (
        <Container>
            <TableOfItems createButtonText="Δημιουργία υποκατηγορίας" />
        </Container>
    )
}
export default AdminProductSubCategories;
