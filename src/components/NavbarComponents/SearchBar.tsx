import React, { useState, useEffect } from 'react';
import { Container } from "@mui/system";
import {Box, TextField} from '@mui/material';
import {inspect} from "util";
import styles from "./TopNavbar.module.css";

function SearchBar() {

    const [searchInput, setSearchInput] = useState("");
    const [searchedProducts, setSearchedProducts] = useState("")
    async function fetchSearchProducts() {
        console.log("Search request triggered with value: ", searchInput)
        const fetchProductData = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchInput}`);
        const productData = await fetchProductData.json();
        setSearchedProducts(productData);
        console.log(productData)
    }

    useEffect(() => { console.log("useEffect triggered") },
        [searchedProducts])


    function searchHandler(e: any) {
        setSearchInput(e.target.value)
    }

    function proceedEnterHandler(e: any) {
        e.key === 'Enter' && fetchSearchProducts()

    }

    return (
        <Box sx={{ mb: 10, mt: 5 }}>
            <Container maxWidth="md" sx={{ py: 4 }}>
                {/*<TextField*/}
                {/*    id="standard-search"*/}
                {/*    label="Αναζήτηση"*/}
                {/*    placeholder="Βρές οτι ψάχνεις για το κατάστημα σου!"*/}
                {/*    type="search"*/}
                {/*    variant="filled"*/}
                {/*    style={{ width: '100%' }}*/}
                {/*    onKeyDown={proceedEnterHandler}*/}
                {/*    onChange={searchHandler}*/}
                {/*/>*/}
                <input
                    className={styles.search}
                    type="search"
                    placeholder="Βρές οτι ψάχνεις για το κατάστημα σου!"
                    onKeyDown={proceedEnterHandler}
                    onChange={searchHandler}
                />
            </Container>
        </Box>
    )
}

export default SearchBar
