import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/system';
import "../CardsCollection/CardStyles.css"

function SearchDropdown(props:any) {
  return (
    <>
    <button onClick={props.toggleModal} className='dropDownCategories'>
    <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center' }}>
      <AppsIcon />
      <h3 style={{padding:"0 8px"}}>Κατηγορίες</h3>
      <KeyboardArrowDownIcon />
    </Box>
    </button>
    </>
  )
}

export default SearchDropdown;
