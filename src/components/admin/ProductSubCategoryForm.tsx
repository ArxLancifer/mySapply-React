import {Box, Button, FormControl, MenuItem, Select, TextField} from "@mui/material";
import React, {FormEvent, useContext, useState} from "react";
import HomeContext from "../store/home-context";
import {IProductCategory, IProductSubCategory} from "../../interfaces/ICategory";
function ProductSubCategoryForm() {
    const ctx = useContext(HomeContext) as IProductCategory[];
    const [title, setTitle] = useState<string>("");
    const [slug, setSlug] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const createSubCategory = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const subCategory: Partial<IProductSubCategory> = {
            title,
            slug,
            imageUrl,
            category
        };
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(subCategory)
            };
            await fetch(`http://localhost:5500/products/sub-categories`, requestOptions);
        } catch (e) {
            console.log(e);
        }
    }

    const handleTitle = (title: string) => {
        setTitle(title);
    };
    const handleSlug = (slug: string) => {
        setSlug(slug);
    };
    const handleImageUrl = (imageUrl: string) => {
        setImageUrl(imageUrl);
    };
    const handleCategory = (categoryId: string) => {
        setCategory(categoryId);
    };

    return (
        <form onSubmit={createSubCategory}>
            <FormControl fullWidth>
                <TextField
                    sx={{my: 1}}
                    id="title"
                    label="Title"
                    variant="filled"
                    type="text"
                    onChange={(event) => {handleTitle(event.target.value)}}
                    value={title}
                />
                <TextField
                    sx={{my: 1}}
                    id="slug"
                    label="Slug"
                    variant="filled"
                    type="text"
                    onChange={(event) => {handleSlug(event.target.value)}}
                    value={slug}
                />
                <TextField
                    sx={{my: 1}}
                    id="imageUrl"
                    label="Image Url"
                    variant="filled"
                    type="text"
                    onChange={(event) => {handleImageUrl(event.target.value)}}
                    value={imageUrl}
                />
                <Select
                    sx={{my: 1}}
                    id="category"
                    variant="filled"
                    onChange={(event) => {handleCategory(event.target.value)}}
                    value={category}
                    name="category"
                >
                    {ctx.map((category) => (
                        <MenuItem inputMode={"text"}  id="category" key={category._id} value={category._id}>
                            {category.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Box sx={{ mt: 2, textAlign: "end" }}>
                <Button
                    variant="contained"
                    color="success"
                    type="submit"
                >
                    Δημιουργία
                </Button>
            </Box>
        </form>
    )
}
export default ProductSubCategoryForm;
