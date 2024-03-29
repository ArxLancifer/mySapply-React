import React, {useContext, useState} from 'react'
import {Container, Grid} from '@mui/material'
import {Box} from '@mui/system'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ActiveCategories from './ActiveCategories';
import HomeContext from '../../store/home-context';
import {IProductCategory} from '../../../interfaces/ICategory';

function CategoriesContainer() {
    const ctx = useContext(HomeContext) as IProductCategory[];
    const [selectedCategory, setSelectedCategory] = useState<string>("Αλκολούχα ποτά")

    function handleSelected(e: any) {
        e.stopPropagation();
        const categoryAttribute = e.currentTarget.getAttribute("categoryname");
        setSelectedCategory(categoryAttribute);
    }

    function Category(cat: IProductCategory) {
        const categoryname = {categoryname: cat.title}
        return (
            <Box
                onClick={handleSelected}
                key={cat._id}
                {...categoryname}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "8px", "&:hover": {backgroundColor: "rgb(200, 200, 200, 0.5)"},
                    cursor: "pointer"
                }}>
                {cat?.imageUrl &&
                    <div>
                        <img style={{width: "40px", height: "40px", borderRadius: "50%", margin: 0}} src={cat?.imageUrl} alt={cat.title}/>
                    </div>
                }
                <h4 style={{width: "75%", marginLeft: "10px"}}>{cat.title}</h4>
                <ChevronRightIcon/>
            </Box>
        )
    }

    return (
        <Container>
            <Grid container spacing={1}>
                <Grid item xs={6} sx={{borderRight: 1}}>
                    {ctx.map(Category)}
                </Grid>
                <Grid item xs={6} md={3}>
                    <ActiveCategories selectedCategory={selectedCategory}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CategoriesContainer
