import React from 'react';
import './CardStyles.css';
import {IProductCategory, IProductSubCategory} from "../../interfaces/ICategory";
import {Box} from "@mui/material";
import {Link} from "react-router-dom";

function CategoryCard(props: {category: IProductCategory}) {
    const linkStyle = {
        textDecoration: "none",
        color: "inherit"
    };

    return (
        <Box key={props.category?._id} className="cardStyles">
            <h4>
                <Link to={`products/${props.category?.slug}`} style={linkStyle}>
                    {props.category?.title}
                </Link>
            </h4>
            <ul>
                {props.category?.subCategories.map((subCategory: IProductSubCategory) => (
                    <li key={subCategory?._id}>
                        <Link to={`products/${props.category?.slug}/${subCategory?.slug}`} style={linkStyle}>
                            {subCategory?.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className='PNG'></div>
            {/*PNG icon*/}
        </Box>
    )
}

export default CategoryCard


