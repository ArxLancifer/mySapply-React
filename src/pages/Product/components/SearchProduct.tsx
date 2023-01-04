import {Autocomplete, Container, FormControl, TextField} from "@mui/material";
import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import {IProduct} from "../../../interfaces/IAlcoholDrink";

function SearchProduct() {
    const [options, setOptions] = useState<Partial<IProduct>[]>([]);
    const getProductByValue = async (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.target.value;
        if (value.length > 2) {
            const response = await axios.post("http://localhost:5500/products/search", {value});
            console.log(response.data);
        }
    }

    const getProducts = async () => {
        const data = {};
        const response = await axios.post("http://localhost:5500/products", {data});
        setOptions(response.data);
    };

    // useEffect(() => {
    //     getProducts();
    // }, []);

    return (
        <form>
            <Container maxWidth="sm">
                {/*<FormControl sx={{my: 4, width: "100%"}}>*/}
                {/*    <TextField*/}
                {/*        size="small"*/}
                {/*        sx={{*/}
                {/*            width: "100%",*/}
                {/*            fieldset: {*/}
                {/*                border: "1px solid #ccc",*/}
                {/*                borderRadius: "50px",*/}
                {/*            },*/}
                {/*        }}*/}
                {/*        type="search"*/}
                {/*        id="search"*/}
                {/*        placeholder="Γράψε τον όρο αναζήτησης"*/}
                {/*        onChange={getProductByValue}*/}
                {/*    />*/}
                {/*</FormControl>*/}
                <Autocomplete
                    size="small"
                    sx={{
                        width: "100%",
                        fieldset: {
                            border: "1px solid #ccc",
                            borderRadius: "50px",
                        },
                    }}
                    disablePortal
                    id="combo-box-demo"
                    options={options}
                    renderInput={(params) => <TextField {...params} label="Γράψε τον όρο αναζήτησης" />}
                />
            </Container>

        </form>
    )
}

export default SearchProduct;
