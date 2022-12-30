import {Box, Container, Slider, TextField, Typography} from "@mui/material";
import React, {useState} from "react";

function FilterSlider() {
    const [sliderValue, setSliderValue] = useState<number>(100);
    const sliderValueHandler = (value: number | any) => {
        setSliderValue(value);
    }

    return (
        <Container>
            <Typography>
                Περιοχή τιμών
            </Typography>
            <Slider
                defaultValue={100}
                onChange={(event, value) => sliderValueHandler(value)}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                min={10}
                max={100}
            />
            <Box sx={{display: "flex"}}>
                <TextField
                    sx={{mr: 1}}
                    id="min"
                    label="10"
                    variant="outlined"
                    type="text"
                    // onChange={(event) => {handleValue(event.target.value)}}
                    // value={sliderValue}
                />
                <TextField
                    sx={{ml: 1}}
                    id="max"
                    label={sliderValue}
                    variant="outlined"
                    type="text"
                    // onChange={(event) => {handleValue(event.target.value)}}
                />
            </Box>

        </Container>
    )
}

export default FilterSlider;
