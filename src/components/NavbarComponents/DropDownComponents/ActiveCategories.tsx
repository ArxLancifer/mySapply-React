import React, { useContext } from 'react'
import { Box } from '@mui/material'
import HomeContext from '../../store/home-context'


function ActiveCategories(props:any) {
    const ctx = useContext<any>(HomeContext)
    
    const subCategories = ctx.filter((subCat:any) => subCat.title === props.selectedCategory)

    

  return (
    <Box sx={{display:'flex', flexWrap:'wrap'}}>
      {subCategories[0].categories.map((product:any)=>{
        return(
            <div key={product} style={{width:"200px", height:"100px", backgroundColor:"green", margin:'2%'}}>{product}</div>
        )
      })}
    </Box>
  )
}

export default ActiveCategories
