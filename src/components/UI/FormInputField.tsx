import React, { FormEvent, useState } from 'react';
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import { IFormControl } from '../../interfaces/IFormControl';
import { IProductCategory, IProductSubCategory } from '../../interfaces/ICategory';

function FormInputField(props: {form: IFormControl, categories?: IProductCategory[], value: any}) {
    const [value, setValue] = useState<string>("");
    const handleValue = (value: string) => {
        setValue(value);
        props?.value({[props.form.id]: value});
    };

    return (
        <>
            {props.form?.notSelect &&
                <FormControl fullWidth>
                    <TextField
                        sx={{my: 1}}
                        id={props.form?.id}
                        label={props.form?.label}
                        variant={props.form?.variant}
                        type={props.form?.type}
                        onChange={(event) => {handleValue(event.target.value)}}
                        value={value}
                        required
                    />
                </FormControl>
            }
            {
                !props.form.notSelect && 
                <FormControl fullWidth>
                    <TextField
                            select
                            sx={{my: 1}}
                            id={props.form?.id}
                            variant={props.form?.variant}
                            label={props.form?.label}
                            onChange={(event) => {handleValue(event.target.value)}}
                            value={value}
                            name="category"
                            required
                        >
                        {props.categories?.map((category) => (
                            <MenuItem inputMode={"text"}  id="category" key={category._id} value={category._id}>
                                {category.title}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>
            }
        </>
    )
}

export default FormInputField;