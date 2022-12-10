import { Box } from '@mui/system'
import React from 'react'

function CardsContainer(props:any) {
  return (
    <Box sx={{display:'flex', my:10}}>
        {props.children}
    </Box>
  )
}

export default CardsContainer
