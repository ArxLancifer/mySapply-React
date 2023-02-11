import {
    Box,
    Checkbox,
    debounce,
    Divider,
    FormControlLabel,
    FormGroup,
    InputAdornment,
    Slider,
    TextField,
    Typography
} from '@mui/material'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import React, {ChangeEvent, useEffect, useState} from 'react'
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";
import {IProductCategory, IProductSubCategory} from "../../../../interfaces/ICategory";


const minDistance = 10;

function FilterProducts() {
    const [empty, productUrl, categoryUrl, subCategoryUrl] = useLocation().pathname.split("/");
    const [category, setCategory] = useState<Partial<IProductCategory>>({});

    const minProductPrice = 15;
    const maxProductPrice = 150;

    const [values, setValues] = React.useState<number[]>([minProductPrice, maxProductPrice]);

    const [filterOptions, setFilterOptions] = useState<{[key: string]: boolean}>({});

    const fetchCategories = async () => {
        const response = await axios.get(`http://localhost:5500/filters/categories/${categoryUrl}`);
        setCategory(response.data);
    };

    async function checkBoxHandler(event: ChangeEvent<HTMLInputElement>) {
        // const optionsFiltered:{[key:string]:boolean}[] = [];
        setFilterOptions((prevOptions) => {
            return {
                ...prevOptions,
                [event.target.id]: event.target.checked
            }
        })

    }

    async function filteredOptions(){
        const productsToSearch: string[] = Object.keys(filterOptions).filter(option => filterOptions[option] === true);
        console.log(productsToSearch)
        const filteredFetch = await axios.post("http://localhost:5500/filters/sub-categories", productsToSearch);

    }

    // console.log(filterOptions, "WTF");
    function handleSliderChange(event:any):[] | void{
        if(Math.abs(event.target.value[0]-event.target.value[1]) <= minDistance){
            return;
        }
        setValues(event.target.value)

        // debounce(()=>setValues(event.target.value), 300, {leading:false, trailing:true})
    }


    useEffect(() => {
        fetchCategories()
        filteredOptions()
    }, [filterOptions]);

    return (
        <div>
            <Typography variant='h5'>Φίλτρα</Typography>
            <FormControlLabel control={<Checkbox id='offers' size='small' onChange={checkBoxHandler}/>}
                              label="Προσφορές"/>
            <Box sx={{mt: 4}}>
                <Typography variant='subtitle1'>Εύρος τιμών</Typography>
                <TextField
                    sx={{width: {xs: "80%", lg: "40%"}, display: {xs: "block", lg: "inline-block",}, m: 1}}
                    size='small'
                    id="outlined-adornment-weight"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><EuroSymbolIcon
                            sx={{fontSize: "1rem"}}/></InputAdornment>,
                    }}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                    value={values[0]}
                />
                <TextField
                    sx={{width: {xs: "80%", lg: "40%"}, display: {xs: "block", lg: "inline-block"}, m: 1}}
                    size='small'
                    id="outlined-adornment-weight"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><EuroSymbolIcon
                            sx={{fontSize: "1rem"}}/></InputAdornment>,
                    }}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                    value={values[1]}
                />
                
                <Slider
                    sx={{mt: 2}}
                    size='small'
                    value={values}
                    onChange={handleSliderChange}
                    onMouseUp={handleSliderChange}
                    valueLabelDisplay="auto"
                    disableSwap
                />
                <Divider sx={{my: 4}}/>
                <Typography variant='subtitle1'>Είδος</Typography>
                <FormGroup>
                    {category?.subCategories?.map((subCategory: IProductSubCategory) => (
                        <FormControlLabel
                            key={subCategory._id}
                            control={<Checkbox id={subCategory.slug} onChange={checkBoxHandler} size='small'/>} label={subCategory.title}
                        />
                    ))}
                </FormGroup>
                <Divider sx={{my: 4}}/>
                <Typography variant='subtitle1'>Brands</Typography>
                {/* Fetch and map all branch from database */}
                <FormGroup>
                    <FormControlLabel control={<Checkbox id='absolute' onChange={checkBoxHandler} size='small'/>}
                                      label="Absolute"/>
                    <FormControlLabel control={<Checkbox id='belveder' onChange={checkBoxHandler} size='small'/>}
                                      label="Belveder"/>
                    <FormControlLabel control={<Checkbox id='smirnoff' onChange={checkBoxHandler} size='small'/>}
                                      label="Smirnoff"/>
                </FormGroup>
            </Box>
        </div>
    )
}

export default FilterProducts
