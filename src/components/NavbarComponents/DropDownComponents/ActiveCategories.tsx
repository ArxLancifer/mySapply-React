import { Box } from '@mui/material'
import React from 'react'

function ActiveCategories() {
  return (
    <Box sx={{display:'flex', flexWrap:'wrap'}}>
      <div style={{width:"200px", height:"100px", backgroundColor:"green", margin:'2%'}} />
      <div style={{width:"200px", height:"100px", backgroundColor:"green", margin:'2%'}} />
      <div style={{width:"200px", height:"100px", backgroundColor:"green", margin:'2%'}} />
      <div style={{width:"200px", height:"100px", backgroundColor:"green", margin:'2%'}} />
      <div style={{width:"200px", height:"100px", backgroundColor:"green", margin:'2%'}} />
    </Box>
  )
}

export default ActiveCategories
