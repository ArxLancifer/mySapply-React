import {Autocomplete, AutocompleteValue, Container, TextField} from "@mui/material";
import React, {SyntheticEvent, useEffect} from "react";
import {IProductSubCategory} from "../../../../interfaces/ICategory";
import {useDispatch, useSelector} from "react-redux";
import {AdminProductState} from "../../../../store/admin/AdminProducts";
import {getSubCategoriesData, handleSearchData} from "../../../../store/admin/adminProducts-actions";

function SearchToFindSubCategory() {
    const dispatch = useDispatch();
    const options = useSelector<{adminProducts: AdminProductState}>(state => state.adminProducts.subCategories) as IProductSubCategory[];

    const handleSearch = async (event: SyntheticEvent, value: AutocompleteValue<any, any, any, any>) => {
        dispatch(handleSearchData(event, value) as any);
    };

    useEffect(() => {
        dispatch(getSubCategoriesData() as any);
    }, [dispatch]);

    return (
        <>
            <form>
                <Container maxWidth="sm">
                    <Autocomplete
                        size="small"
                        sx={{
                            width: "100%",
                            fieldset: {
                                border: "1px solid #ccc",
                                borderRadius: "50px",
                            },
                            my: 4
                        }}
                        disablePortal
                        id="combo-box-demo"
                        options={options}
                        renderInput={(params) => <TextField {...params} label="Αναζήτησε την υποκατηγορία που θες να δημιουργήσεις το προϊόν"/>}
                        onChange={(event, value) => handleSearch(event, value)}
                    />
                </Container>
            </form>
        </>
    )
}

export default SearchToFindSubCategory;
