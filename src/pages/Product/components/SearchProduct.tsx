import {Container, FormControl, TextField} from "@mui/material";
import {ChangeEvent} from "react";
import axios from "axios";

function SearchProduct() {
    const getProductByValue = async (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.target.value;
        if (value.length > 2) {
            const response = await axios.post("http://localhost:5500/products/search", {value});
            console.log(response.data);
        }
    }

    return (
        <form>
            <Container maxWidth="sm">
                <FormControl sx={{my: 4, width: "100%"}}>
                    <TextField
                        size="small"
                        sx={{
                            width: "100%",
                            fieldset: {
                                border: "1px solid #ccc",
                                borderRadius: "50px",
                            },
                        }}
                        type="search"
                        id="search"
                        placeholder="Γράψε τον όρο αναζήτησης"
                        onChange={getProductByValue}
                    />
                </FormControl>
            </Container>

        </form>
    )
}

export default SearchProduct;
