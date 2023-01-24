import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Box} from '@mui/system';
import "../CardsCollection/CardStyles.css"
import {Typography} from "@mui/material";

function SearchDropdown(props: any) {
    return (
        <>
            <button onClick={props.toggleModal} className='dropDownCategories'>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <AppsIcon />
                    <Typography sx={{ padding: "0 8px" }} variant="subtitle1">
                        Κατηγορίες
                    </Typography>
                    <KeyboardArrowDownIcon/>
                </Box>
            </button>
        </>
    )
}

export default SearchDropdown;
