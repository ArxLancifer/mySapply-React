import React, { useContext, useState } from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ActiveCategories from './ActiveCategories';
import HomeContext from '../../store/home-context';
import { IProductCategory } from '../../../interfaces/ICategory';

function CategoriesContainer() {
  const ctx = useContext(HomeContext) as IProductCategory[];
  const [selectedCategory, setSelectedCategory] = useState<string>("Αλκολούχα ποτά")

  function handleSelected(e: any) {
    e.stopPropagation();
    const categoryAttribute = e.currentTarget.getAttribute("categoryname");
    setSelectedCategory(categoryAttribute);
  }

  function Category(cat: IProductCategory) {
    const categoryname = { categoryname: cat.title }
    return (
      <Box
        onClick={handleSelected}
        key={cat._id}
        {...categoryname}
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "8px", "&:hover": { backgroundColor: "rgb(200, 200, 200, 0.5)" },
          cursor: "pointer"
        }} >
        <div style={{ width: "25px", height: "25px", borderRadius: "50%", backgroundColor: "purple" }}></div>
        <h4 style={{ width: "75%", marginLeft: "10px" }}>{cat.title}</h4>
        <ChevronRightIcon />
      </Box>
    )
  }

  return (
    <Grid container spacing={1}>
      <Grid item sx={{ borderRight: 1, m: 2 }} xs={3}>
        {ctx.map(Category)}
      </Grid>
      <Grid item sx={{ borderRight: 1, m: 2 }} xs={5}>
        <ActiveCategories selectedCategory={selectedCategory} />
      </Grid>
    </Grid>
  )
}

export default CategoriesContainer
