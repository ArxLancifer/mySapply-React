import { Box } from '@mui/system'
import React from 'react'

function CategoriesContainer() {

    const categories = ["Αλκολούχα", "Αναψυκτικά", "Καφέδες", "Γαλακοτκομικά", "Είδη Σερβιρίσματος"]

    function Category(cat:string){
        return(
            
            <Box key={cat} sx={{display:"flex", alignItems:"center"}} >
                <div style={{margin:"0 1%", width:"25px", height:"25px", borderRadius:"50%", backgroundColor:"purple"}}></div>
                <h4 >{cat}</h4>
            </Box>
            
        )
    }

  return (
    
      <Box>
        
        {categories.map(Category)}
        
      </Box>
    
  )
}

export default CategoriesContainer
