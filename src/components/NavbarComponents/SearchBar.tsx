import React, { useState, useEffect, useContext } from "react";
import { Container } from "@mui/system";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchDropdown from "./SearchDropdown";
import DropDownCategories from "./DropDownCategories";
import HomeContext from "../store/home-context";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [searchedProducts, setSearchedProducts] = useState("");
  const [open, setOpen] = React.useState(false);


  function toggleModal() {
    setOpen((open) => !open);
  }

  async function fetchSearchProducts() {
    console.log("Search request triggered with value: ", searchInput);
    const fetchProductData = await fetch(
      `https://api.punkapi.com/v2/beers?beer_name=${searchInput}`
    );
    const productData = await fetchProductData.json();
    setSearchedProducts(productData);
    console.log(productData);
  }


  function searchHandler(e: any) {
    setSearchInput(e.target.value);
  }

  function proceedEnterHandler(e: any) {
    e.key === "Enter" && fetchSearchProducts();
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ my: 2 }}>
        <TextField
          type="search"
          placeholder="Βρές ό,τι ψάχνεις για το κατάστημά σου!"
          sx={{
            width: "100%",
            fieldset: {
              border: "1px solid #333333",
              borderRadius: "50px",
            },
          }}
          onKeyDown={proceedEnterHandler}
          onChange={searchHandler}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ fontSize: 30 }} />
                <SearchDropdown toggleModal={toggleModal} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      {<DropDownCategories toggleModal={toggleModal} open={open} />}
    </Container>
  );
}

export default SearchBar;
