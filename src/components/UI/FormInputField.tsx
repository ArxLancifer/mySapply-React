import React, { FormEvent, useState } from 'react';
import { FormControl, MenuItem, TextField} from "@mui/material";
import { IFormInputField } from '../../interfaces/IFormControl';

function FormInputField(props: IFormInputField) {
    const [value, setValue] = useState<string>("");
    const handleValue = (value: string) => {
        setValue(value);
        props?.getValuesFromInputs({[props.form.id]: value});
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