import React, {useContext} from 'react'
import {Box} from '@mui/material'
import HomeContext from '../../store/home-context'
import {IProductCategory, IProductSubCategory} from '../../../interfaces/ICategory'

function ActiveCategories(props: { selectedCategory: string }) {
    const ctx = useContext(HomeContext) as IProductCategory[];

    const categories: IProductCategory[] = ctx.filter((subCat: Pick<IProductCategory, "title">) => subCat.title === props.selectedCategory);
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            {categories[0].subCategories?.map((subCategory: IProductSubCategory) => {
                return (
                    <div key={subCategory._id} style={{
                        width: "200px",
                        height: "100px",
                        backgroundColor: "green",
                        margin: '2%'
                    }}>{subCategory.title}</div>
                )
            })}
        </Box>
    )
}

export default ActiveCategories
