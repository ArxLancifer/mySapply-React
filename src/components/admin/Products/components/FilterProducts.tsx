import {
    Box,
    Checkbox,
    Divider,
    FormControlLabel,
    InputAdornment,
    Slider,
    TextField,
    Typography
} from '@mui/material'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import React, { ChangeEvent, useEffect, useState } from 'react';

const minDistance = 10;

function FilterProducts() {
    const minProductPrice = 15;
    const maxProductPrice = 150;

    const [values, setValues] = React.useState<number[]>([minProductPrice, maxProductPrice]);
    const [filterOptions, setFilterOptions] = useState<{ [key: string]: boolean }>({});

    async function checkBoxHandler(event: ChangeEvent<HTMLInputElement>) {
        setFilterOptions((prevOptions) => {
            return {
                ...prevOptions,
                [event.target.id]: event.target.checked
            }
        });
    }


    function handleSliderChange(event: any): [] | void {
        if (Math.abs(event.target.value[0] - event.target.value[1]) <= minDistance) {
            return;
        }
        setValues(event.target.value);
    }

    useEffect(() => {


    }, []);

    return (
        <div>
            <Typography variant='h5'>Φίλτρα</Typography>
            <FormControlLabel control={<Checkbox id='offers' size='small' onChange={checkBoxHandler} />}
                label="Προσφορές" />
            <Box sx={{ mt: 4 }}>
                <Typography variant='subtitle1'>Εύρος τιμών</Typography>
                <TextField
                    sx={{ width: { xs: "80%", lg: "40%" }, display: { xs: "block", lg: "inline-block", }, m: 1 }}
                    size='small'
                    id="outlined-adornment-weight"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><EuroSymbolIcon
                            sx={{ fontSize: "1rem" }} /></InputAdornment>,
                    }}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                    value={values[0]}
                />
                <TextField
                    sx={{ width: { xs: "80%", lg: "40%" }, display: { xs: "block", lg: "inline-block" }, m: 1 }}
                    size='small'
                    id="outlined-adornment-weight"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><EuroSymbolIcon
                            sx={{ fontSize: "1rem" }} /></InputAdornment>,
                    }}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                    value={values[1]}
                />

                <Slider
                    sx={{ mt: 2 }}
                    size='small'
                    value={values}
                    onChange={handleSliderChange}
                    onMouseUp={handleSliderChange}
                    valueLabelDisplay="auto"
                    disableSwap
                />
                <Divider sx={{ my: 4 }} />
                <Typography variant='subtitle1'>Brands</Typography>


            </Box>
        </div>
    )
}

export default FilterProducts
