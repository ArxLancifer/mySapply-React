import React, {useState, useEffect} from 'react';
import { Container} from "@mui/system";
import { TextField} from '@mui/material';

function SearchBar() {

    const [searchInput, setSearchInput] = useState("");
    const [searchedProducts, setSearchedProducts] = useState("")
    async function fetchSearchProducts(){
        console.log("Search request triggered with value: ", searchInput)
        const fetchProductData = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchInput}`);
        const productData = await fetchProductData.json();
        setSearchedProducts(productData);
        console.log(productData)
    }

    useEffect(()=>{console.log("useEffect triggered")},
    [searchedProducts])


    function searchHandler(e:any){
        setSearchInput(e.target.value)
    }

    function proceedEnterHandler(e:any){
        e.key === 'Enter' && fetchSearchProducts()
        
    }

  return (
    <div>
       <Container maxWidth="md" sx={{py:4}}>
       <TextField
          id="standard-search"
          label="Αναζήτηση"
          placeholder="Βρές οτι ψάχνεις για το κατάστημα σου!"
          type="search"
          variant="standard"
          style ={{width: '100%'}}
          onKeyDown={proceedEnterHandler}
          onChange={searchHandler}
        />
       </Container>
    </div>
  )
}

export default SearchBar
