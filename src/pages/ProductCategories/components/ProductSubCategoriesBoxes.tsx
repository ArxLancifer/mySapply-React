import React, {Fragment} from "react";
import {IProductSubCategory} from "../../../interfaces/ICategory";
import {Container, Grid, Paper, styled, Typography} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import styles from "./ProductCategories.module.css";

type Props = {
    subCategories: IProductSubCategory[];
}

function ProductSubCategoriesBoxes({subCategories}: Props) {
    const category = useParams<{ slug: string }>();
    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: "#ccc",
        height: "180px",
    }));

    return (
        <Fragment>
            <Container>
                <Grid sx={{mt: -12, mb: 3}} container spacing={2}>
                    {(subCategories)?.map((subCategory, index) => (
                        <Grid key={index} item xs={12} md={4}>
                            <Link className={styles.link} to={`/products/${category?.slug}/${subCategory?.slug}`}>
                                <Item sx={{display: "flex", alignItems: "end", borderRadius: "15px"}}>
                                    <Typography sx={{color: "white", pb: 3, pl: 4}} variant="subtitle1">
                                        {subCategory.title}
                                    </Typography>
                                </Item>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Fragment>
    )
}

export default ProductSubCategoriesBoxes;
