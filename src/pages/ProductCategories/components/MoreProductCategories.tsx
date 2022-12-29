import React, {Fragment, useEffect} from "react";
import {IProductCategory} from "../../../interfaces/ICategory";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Link} from "react-router-dom";
import styles from "./ProductCategories.module.css";

type Props = {
    title: string;
    buttonText?: string;
    categories: Pick<IProductCategory, "title" | "slug" | "imageUrl">[];
}

function MoreProductCategories({title, categories, buttonText}: Props) {
    return (
        <Fragment>
            <Container>
                <Typography sx={{mb: 3}} variant="h6">
                    {title}
                </Typography>
                <Grid
                    sx={{
                        justifyContent: {xs: 'center', md: 'start'},
                        alignItems: "center",
                        textAlign: {xs: 'center', md: 'start'}
                    }}
                    container
                >
                    {(categories?.map((category, index) => (
                        <Grid item sx={{my: {xs: 2}}} xs={4} lg={2} key={index}>
                            <Typography variant="subtitle2">
                                <Link className={styles.link} to={`/products/${category?.slug}`}>
                                    {category.title}
                                </Link>
                            </Typography>
                        </Grid>
                    )))}
                </Grid>
                {
                    (buttonText && categories.length > 5) &&
                    <Box sx={{mt: 4, display: "flex", justifyContent: "center"}}>
                        <Button className={styles["more-categories-btn"]} variant="text" sx={{mb: 3, color: "#0971c8", p: 0}}>
                            {buttonText}
                        </Button>
                        <KeyboardArrowDownIcon sx={{ml: 1, color: "#0971c8"}}/>
                    </Box>
                }
            </Container>
        </Fragment>
    )
}

export default MoreProductCategories;
