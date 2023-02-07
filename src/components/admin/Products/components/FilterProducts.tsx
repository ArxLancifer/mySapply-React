import { Box, Checkbox, Divider, FormControlLabel, FormGroup, InputAdornment, Slider, TextField, Typography } from '@mui/material'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import React, { useState } from 'react'


  
  const minDistance = 10;

function FilterProducts() {

    const minProductPrice = 15;
    const maxProductPrice = 150;

    const [values, setValues] = React.useState<number[]>([minProductPrice, maxProductPrice]);

    const [filterOptions, setFilterOptions] = useState({});

    function checkBoxHandler(event:any){
        setFilterOptions((prevOptions)=>{
            return {
                ...prevOptions,
                [event.target.id]:event.target.checked
            }
        })
    }
    
    console.log(filterOptions, "WTF");
    function handleSliderChange(event:any):[] | void{
        if(Math.abs(event.target.value[0]-event.target.value[1]) <= minDistance){
            return;
        }

        setValues(event.target.value)
    }

    

    return (
<div>
    <Typography variant='h5'>Φίλτρα</Typography>
    <FormControlLabel control={<Checkbox id='offers' size='small' onChange={checkBoxHandler} />} label="Προσφορές" />
    <Box sx={{mt:4}}>
        <Typography variant='subtitle1'>Εύρος τιμών</Typography>
        <TextField
        sx={{width:{xs:"80%", lg:"40%"}, display:{xs:"block", lg:"inline-block",}, m:1}}
        size='small'
            id="outlined-adornment-weight"
            InputProps={{
                endAdornment: <InputAdornment position="end"><EuroSymbolIcon sx={{fontSize:"1rem"}}/></InputAdornment>,
              }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            value={values[0]}
          />
        <TextField
        sx={{width:{xs:"80%", lg:"40%"}, display:{xs:"block", lg:"inline-block" }, m:1}}
        size='small'
            id="outlined-adornment-weight"
            InputProps={{
                endAdornment: <InputAdornment position="end"><EuroSymbolIcon sx={{fontSize:"1rem"}}/></InputAdornment>,
              }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            value={values[1]}
          />
        <Slider
            sx={{mt:2}}
            size='small'
            value={values}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            disableSwap
        />
        <Divider sx={{my:4}}/>
        <Typography variant='subtitle1'>Είδος</Typography>
        <FormGroup>
        <FormControlLabel control={<Checkbox id='vodka' onChange={checkBoxHandler} size='small' />} label="Βοτκα" />
        <FormControlLabel control={<Checkbox id='gin' onChange={checkBoxHandler} size='small' />} label="Τζιν" />
        <FormControlLabel control={<Checkbox id='whiskey' onChange={checkBoxHandler} size='small' />} label="Ουίσκι" />
        </FormGroup>
        <Divider sx={{my:4}}/>
        <Typography variant='subtitle1'>Brands</Typography>
        {/* Fetch and map all branch from database */}
        <FormGroup>
        <FormControlLabel control={<Checkbox id='absolute' onChange={checkBoxHandler} size='small' />} label="Absolute" />
        <FormControlLabel control={<Checkbox id='belveder' onChange={checkBoxHandler} size='small' />} label="Belveder" />
        <FormControlLabel control={<Checkbox id='smirnoff' onChange={checkBoxHandler} size='small' />} label="Smirnoff" />
        </FormGroup>
            </Box>
</div>
    )
}

export default FilterProducts
