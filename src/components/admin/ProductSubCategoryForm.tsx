import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import React, {FormEvent, useContext, useState} from "react";
import HomeContext from "../store/home-context";
import {IProductCategory, IProductSubCategory} from "../../interfaces/ICategory";
import FormInputField from "../UI/FormInputField";
function ProductSubCategoryForm() {
    const ctx = useContext(HomeContext) as IProductCategory[];
    const [formValue, setFormValue] = useState<IProductSubCategory>({title: "", slug: "", imageUrl: "", category: "6398e885e879cfad4454da59"});
    const createSubCategory = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formValue);      
        // try {
        //     const requestOptions = {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(formValue)
        //     };
        //     await fetch(`http://localhost:5500/products/sub-categories`, requestOptions);
        // } catch (e) {
        //     console.log(e);
        // }
    }

    const onInputChangeHandler = (value: any) => {
        setFormValue((prevValue) => {
            return {
                ...prevValue,
                ...value
            }
        });
    }

    return (
        <form onSubmit={createSubCategory}>
            <FormInputField
                form={{
                    id: "title",
                    label: "Title",
                    variant: "filled",
                    type: "text",
                    notSelect: true
                }}
                value={onInputChangeHandler}
            />
            <FormInputField 
                form={{
                    id:"slug",
                    label:"Slug",
                    variant:"filled",
                    type:"text",
                    notSelect: true
                }}
                value={onInputChangeHandler}
            />
            <FormInputField 
                form={{
                    id:"imageUrl",
                    label:"Image Url",
                    variant:"filled",
                    type:"text",
                    notSelect: true
                }}
                value={onInputChangeHandler}
            />
            <FormInputField 
                form={{
                    id:"category",
                    label:"Category",
                    variant:"filled",
                    text: "Select category to generate id",
                    notSelect: false
                }}
                categories={ctx}
                value={onInputChangeHandler}
            />
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
