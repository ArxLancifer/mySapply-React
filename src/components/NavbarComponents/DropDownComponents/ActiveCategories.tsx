import React, { useContext } from 'react'
import { Box } from '@mui/material'
import HomeContext from '../../store/home-context'
import { IProductCategory } from '../../../interfaces/ICategory'


function ActiveCategories(props: {selectedCategory: string}) {
  const ctx = useContext(HomeContext) as IProductCategory[];
  
  const subCategories: IProductCategory[] = ctx.filter((subCat: Pick<IProductCategory, "title">) => subCat.title === props.selectedCategory);

  return (
    <Box sx={{display:'flex', flexWrap:'wrap'}}>
      {subCategories[0]?.products?.map((product: string)=>{
        return(
          <div key={product} style={{width:"200px", height:"100px", backgroundColor:"green", margin:'2%'}}>{product}</div>
        )
      })}
    </Box>
  )
}

export default ActiveCategories
