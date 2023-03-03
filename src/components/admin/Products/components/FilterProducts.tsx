import {
    Box,
    Button,
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
import {useDispatch, useSelector} from "react-redux";
import {filterState, getProductsByPriceRange, getSubCategoryProducts} from "../../../../store/filters";
import { useLocation } from 'react-router-dom';


function FilterProducts() {
    const dispatch = useDispatch();
    const location = useLocation();

    const priceRange = useSelector<{filters: filterState}>(state => state.filters.filters.priceRange) as number[];
    const {minPrice, maxPrice} = useSelector<{filters: filterState}>(state => state.filters) as filterState;

    async function checkBoxHandler(event: ChangeEvent<HTMLInputElement>) {}

    function handleSliderChange(event:any){
        if ((event.target.value[1] - event.target.value[0]) <= 20) {
            return;
        }
        dispatch(getProductsByPriceRange({min: event.target.value[0], max: event.target.value[1]}));
    }

    useEffect(()=>{

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
                    value={priceRange[0]}
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
                    value={priceRange[1]}
                />

                <Slider
                    sx={{ mt: 2 }}
                    size='small'
                    value={[priceRange[0], priceRange[1]]}
                    min={minPrice}
                    max={maxPrice}
                    step={10}
                    onChange={handleSliderChange}
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
