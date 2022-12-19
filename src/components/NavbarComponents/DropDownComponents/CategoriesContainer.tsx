import React from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ActiveCategories from './ActiveCategories';

function CategoriesContainer() {

    const categories = ["Αλκολούχα", "Αναψυκτικά", "Καφέδες", "Γαλακοτκομικά", "Είδη Σερβιρίσματος"]

    function Category(cat:string){
        return(
            
            <Box key={cat} sx={{display:"flex", alignItems:"center",borderRadius:"8px", "&:hover":{backgroundColor:"rgb(200, 200, 200, 0.5)"}}} >
                <div style={{width:"25px", height:"25px", borderRadius:"50%", backgroundColor:"purple"}}></div>
                <h4 style={{width:"75%", marginLeft:"10px"}}>{cat}</h4>
                <ChevronRightIcon />
            </Box>
            
        )
    }

  return (
    <Grid container spacing={1}>
      <Grid sx={{borderRight:1, m:2}} xs={3}>
        {categories.map(Category)}
      </Grid>
      <Grid sx={{borderRight:1, m:2}} xs={5}>
        <ActiveCategories />
      </Grid>
    </Grid>
  )
}

export default CategoriesContainer
