import { Box, Checkbox, Divider, FormControlLabel, FormGroup, InputAdornment, OutlinedInput, Slider, TextField, Typography } from '@mui/material'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import React from 'react'


  
  const minDistance = 10;

function FilterProducts() {

    const [values, setValues] = React.useState<number[]>([0, 100]);

    function handleSliderChange(event:any):[] | void{
        if(Math.abs(event.target.value[0]-event.target.value[1]) <= minDistance){
            return;
        }

        setValues(event.target.value)
    }

  

    return (
<div>
    <Typography variant='h5'>Φίλτρα</Typography>
    <FormControlLabel control={<Checkbox size='small' />} label="Προσφορές" />
    <Box sx={{mt:4}}>
        <Typography variant='subtitle1'>Εύρος τιμών</Typography>
        <TextField
        sx={{width:"45%", height:"2px", mr:"1rem"}}
        size='small'
            id="outlined-adornment-weight"
            InputProps={{
                endAdornment: <InputAdornment position="end"><EuroSymbolIcon /></InputAdornment>,
              }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            value={values[0]}
          />
        <TextField
        sx={{width:"45%"}}
        size='small'
            id="outlined-adornment-weight"
            InputProps={{
                endAdornment: <InputAdornment position="end"><EuroSymbolIcon /></InputAdornment>,
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
        <FormControlLabel control={<Checkbox defaultChecked size='small' />} label="Βοτκα" />
        <FormControlLabel control={<Checkbox size='small' />} label="Τζιν" />
        <FormControlLabel control={<Checkbox size='small' />} label="Ουίσκι" />
        </FormGroup>
        <Divider sx={{my:4}}/>
        <Typography variant='subtitle1'>Brands</Typography>
        {/* Fetch and map all branch from database */}
        <FormGroup>
        <FormControlLabel control={<Checkbox size='small' />} label="Absolute" />
        <FormControlLabel control={<Checkbox size='small' />} label="Belveder" />
        <FormControlLabel control={<Checkbox size='small' />} label="Smirnoff" />
        </FormGroup>
            </Box>
</div>
    )
}

export default FilterProducts
