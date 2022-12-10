import { Box } from '@mui/system'
import React from 'react'

function CardsContainer(props:any) {
  return (
    <Box sx={{py:5}}>
        <h2 style={{}}>{props.heading}</h2>
    <Box sx={{display:'flex', justifyContent: 'space-between', mt:5, mb:10}}>
        {props.children}
    </Box>
    </Box>
  )
}

export default CardsContainer
