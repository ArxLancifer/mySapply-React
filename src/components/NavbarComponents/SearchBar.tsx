import React, {useState} from 'react';
import { Container} from "@mui/system";
import { TextField} from '@mui/material';

function SearchBar() {

    const [searchInput, setSearchInput] = useState("");

    function searchHandler(e:any){
        setSearchInput(e.target.value)
    }

    function proceedEnterHandler(e:any){
        e.key === 'Enter' && console.log("Search request triggered with value: ", searchInput)
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
