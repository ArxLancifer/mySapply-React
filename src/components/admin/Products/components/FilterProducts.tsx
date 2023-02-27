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
import {filterState, getSubCategoryProducts} from "../../../../store/filters";
import {IAlcoholDrink} from "../../../../interfaces/IAlcoholDrink";
import axios, { AxiosResponse } from "axios";
import { useLocation } from 'react-router-dom';


function FilterProducts({props}:any) {
    const dispatch = useDispatch();
    const {minPrice, maxPrice, filters} = useSelector<{ filters: filterState }>((state) => state?.filters) as filterState;
    const [sliderState, setSliderState] = useState([props.priceRange[0], props.priceRange[1]])
    const location = useLocation();
    async function checkBoxHandler(event: ChangeEvent<HTMLInputElement>) {}

    console.log(sliderState)

    function handleSliderChange(event:any){
        if ((event.target.value[1] - event.target.value[0]) <= 20) {
            return;
        }
        setSliderState([event.target.value[0], event.target.value[1]])
    }

    function handleSliderRequest(event: any): [] | void {
        if ((filters.priceRange[1] - filters.priceRange[0]) <= 20) {
            return;
        }
        // console.log(minPrice, maxPrice, filters.priceRange)
        // dispatch(getProductsByPriceRange({min: event.target.value[0], max: event.target.value[1]}));
    }
    console.log(sliderState)
    useEffect(()=>{
        setSliderState([...filters.priceRange])
    }, [])

    async function handleFetchWithFilters(){
        try {
            const responseWithFilters: AxiosResponse<{allProducts: IAlcoholDrink[], prices: number[]}> = await axios.post(
                `http://localhost:5500${location.pathname}`,
                {filters:{priceRange:sliderState}}
                );
                dispatch(getSubCategoryProducts(responseWithFilters.data.allProducts));
                console.log(responseWithFilters.data)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <Typography variant='h5'>Φίλτρα</Typography>
            <FormControlLabel control={<Checkbox id='offers' size='small' onChange={checkBoxHandler} />}
                label="Προσφορές" />
            <Box sx={{ mt: 4 }}>
            <Button onClick={handleFetchWithFilters} variant='outlined' sx={{my:2}}>Εφαρμογή</Button>
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
                    value={sliderState[0]}
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
                    value={sliderState[1]}
                />

                <Slider
                    sx={{ mt: 2 }}
                    size='small'
                    value={[...sliderState]}
                    min={minPrice}
                    max={maxPrice}
                    step={10}
                    onChange={handleSliderChange}
                    onMouseUp={handleSliderRequest}
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
