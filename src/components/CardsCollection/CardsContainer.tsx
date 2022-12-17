import { Box } from '@mui/system'
import React from 'react'

function CardsContainer(props:any) {
  return (
    <Box >
        <h2>{props.heading}</h2>
    <Box sx={{py:5}}>
        {props.children}
    </Box>
    </Box>
  )
}

export default CardsContainer
