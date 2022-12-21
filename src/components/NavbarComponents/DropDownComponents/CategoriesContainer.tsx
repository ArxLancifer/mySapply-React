import React, { useContext, useState } from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ActiveCategories from './ActiveCategories';
import HomeContext from '../../store/home-context';

function CategoriesContainer() {
    const ctx = useContext<any>(HomeContext)
    const [selectedCategory, setSelectedCategory] = useState("Αλκολούχα ποτά")

    

    function Category(cat:any){
        const categoryname = {categoryname:cat.title}
        return(
            
            <Box {...categoryname}  key={cat._id} sx={{display:"flex", alignItems:"center",borderRadius:"8px", "&:hover":{backgroundColor:"rgb(200, 200, 200, 0.5)"}}} >
                <div  style={{width:"25px", height:"25px", borderRadius:"50%", backgroundColor:"purple"}}></div>
                <h4 style={{width:"75%", marginLeft:"10px"}}>{cat.title}</h4>
                <ChevronRightIcon />
            </Box>
            
        )
    }

  return (
    <Grid container spacing={1}>
      <Grid item sx={{borderRight:1, m:2}} xs={3}>
        {ctx.map(Category)}
      </Grid>
      <Grid item sx={{borderRight:1, m:2}} xs={5}>
        <ActiveCategories selectedCategory={selectedCategory} />
      </Grid>
    </Grid>
  )
}

export default CategoriesContainer
