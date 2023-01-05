import {Autocomplete, AutocompleteValue, Container, FormControl, TextField} from "@mui/material";
import {ChangeEvent, SyntheticEvent, useEffect, useState} from "react";
import axios from "axios";
import {IProduct} from "../../../interfaces/IAlcoholDrink";

type Props = {
    changeProduct: (product: IProduct) => void
}

function SearchProduct({changeProduct}: Props) {
    const [options, setOptions] = useState<any[]>([]);

    const getProducts = async () => {
        const response = await axios.get("http://localhost:5500/products");
        const productsTitles = (response.data as IProduct[]).map(p => {
            return {
                label: p.brandName,
                slug: p.slug
            }
        });
        setOptions(productsTitles);
    };

    const handleSearch = async (event: SyntheticEvent, value: AutocompleteValue<any, any, any, any>) => {
        const response = await axios.post("http://localhost:5500/products/search", {value});
        changeProduct(response.data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <form>
            <Container maxWidth="sm">
                <Autocomplete
                    size="small"
                    sx={{
                        width: "100%",
                        fieldset: {
                            border: "1px solid #ccc",
                            borderRadius: "50px",
                        },
                        my: 4
                    }}
                    disablePortal
                    id="combo-box-demo"
                    options={options}
                    renderInput={(params) => <TextField {...params} label="Γράψε τον όρο αναζήτησης"/>}
                    onChange={(event, value) => handleSearch(event, value)}
                />
            </Container>
        </form>
    )
}

export default SearchProduct;
