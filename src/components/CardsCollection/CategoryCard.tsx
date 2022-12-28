import React from 'react';
import './CardStyles.css';
import {IProductCategory, IProductSubCategory} from "../../interfaces/ICategory";
import {Box} from "@mui/material";

function CategoryCard(props: {category: IProductCategory}) {

    return (
        <Box key={props.category._id} className="cardStyles">
            <h4>
                {props.category.title}
            </h4>
            <ul>
                {props.category.subCategories.map((subCategory: IProductSubCategory) => (
                    <li>{subCategory.title}</li>
                ))}
            </ul>

            <div className='PNG'></div>
            {/*PNG icon*/}
        </Box>
    )
}

export default CategoryCard


