import React from 'react';
import { Container} from "@mui/system";
import { TextField} from '@mui/material';

function SearchBar() {
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
        />
       </Container>
    </div>
  )
}

export default SearchBar
