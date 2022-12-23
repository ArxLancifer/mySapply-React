import {Box, Button, FormControl, MenuItem, Select, TextField} from "@mui/material";
import React, {useContext, useState} from "react";
import HomeContext from "../store/home-context";
import {IProductCategory, IProductSubCategory} from "../../interfaces/ICategory";
function ProductSubCategoryForm() {
    const ctx = useContext(HomeContext) as IProductCategory[];
    const [selected, setSelected] = useState<string>("Αλκολούχα ποτά");
    const [subCategoryInput, setSubCategoryInput] = useState<IProductSubCategory>({title: "", slug: "", imageUrl: "", category: ""});
    const createSubCategory = (event: any) => {
        event.preventDefault();
        const subCategory: IProductSubCategory = {...subCategoryInput};
        console.log(subCategory);
    }

    const handleInput = (e:any) => {
        console.log(e.target);
        const subCategory = e.target.id;
        const dataToCreate = {
            [subCategory]:e.target.value,
            category: e.target.value
        }
        setSubCategoryInput({
            ...subCategoryInput,
            ...dataToCreate
        })
    }
    return (
        <form onSubmit={createSubCategory}>
            <FormControl fullWidth>
                <TextField sx={{my: 1}} id="title" label="Title" variant="filled" type="text" onChange={handleInput} value={subCategoryInput.title} />
                <TextField sx={{my: 1}} id="slug" label="Slug" variant="filled" type="text" onChange={handleInput} value={subCategoryInput.slug} />
                <TextField sx={{my: 1}} id="imageUrl" label="Image Url" variant="filled" type="text" onChange={handleInput} value={subCategoryInput.imageUrl} />
                <Select
                    sx={{my: 1}}
                    id="category"
                    labelId="category"
                    label="Category"
                    variant="filled"
                    onChange={handleInput}
                    value={subCategoryInput.category}
                    name="category"
                    inputMode={"text"}
                >
                    {ctx.map((category) => (
                        <MenuItem inputMode={"text"}  id="category" key={category._id} value={category.title}>
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
