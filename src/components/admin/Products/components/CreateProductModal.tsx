import React, {FormEvent, useState} from "react";
import {Box, Button, Modal} from "@mui/material";
import styles from "../../components/modal.module.css";
import FormInputField from "../../../UI/FormInputField";
import {IProduct} from "../../../../interfaces/IAlcoholDrink";
import axios from "axios";
import {IProductCategory, IProductSubCategory} from "../../../../interfaces/ICategory";

function CreateProductModal(props: {
    value: boolean,
    setModal: (boolean: boolean) => void,
    categories: IProductCategory[],
    subCategory: Partial<IProductSubCategory>
}) {
    const [formValue, setFormValue] = useState<Partial<IProduct>>({});
    const baseUrl = "http://localhost:5500/admin/products";
    const createProduct = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
           const response = await axios.post(`${baseUrl}`, formValue);
           if(response.status === 200) {
            handleClose();
           }
        } catch (e) {
            console.log(e);
        }
    }

    const onInputChangeHandler = (value: { [key: string]: string }) => {
        setFormValue((prevValue) => {
            return {
                ...prevValue,
                ...value
            }
        });
    }

    const handleClose = () => props.setModal(false);

    return (
        <Modal
            open={props.value}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.modal}>
                <form onSubmit={createProduct}>
                    <FormInputField
                        form={{
                            id: "category",
                            label: "Category",
                            variant: "filled",
                            type: "text",
                            notSelect: false
                        }}
                        categories={props.categories}
                        getValuesFromInputs={onInputChangeHandler}
                    />
                    <FormInputField
                        form={{
                            id: "subCategory",
                            label: "Sub Category",
                            variant: "filled",
                            type: "text",
                            notSelect: false
                        }}
                        categories={(props.subCategory?.category as IProductCategory)?.subCategories}
                        getValuesFromInputs={onInputChangeHandler}
                    />
                    <FormInputField
                        form={{
                            id: "brandName",
                            label: "Brand Name",
                            variant: "filled",
                            type: "text",
                            notSelect: true
                        }}
                        getValuesFromInputs={onInputChangeHandler}
                    />
                    <FormInputField
                        form={{
                            id: "alcoholVol",
                            label: "AlcoholVol",
                            variant: "filled",
                            type: "text",
                            notSelect: true
                        }}
                        getValuesFromInputs={onInputChangeHandler}
                    />
                    <FormInputField
                        form={{
                            id: "weightML",
                            label: "WeightML",
                            variant: "filled",
                            type: "text",
                            notSelect: true
                        }}
                        getValuesFromInputs={onInputChangeHandler}
                    />
                    <FormInputField
                        form={{
                            id: "title",
                            label: "Title",
                            variant: "filled",
                            type: "text",
                            notSelect: true
                        }}
                        getValuesFromInputs={onInputChangeHandler}
                    />
                    <FormInputField
                        form={{
                            id: "price",
                            label: "Price",
                            variant: "filled",
                            type: "number",
                            notSelect: true
                        }}
                        getValuesFromInputs={onInputChangeHandler}
                    />
                    <FormInputField
                        form={{
                            id: "slug",
                            label: "Slug",
                            variant: "filled",
                            type: "text",
                            notSelect: true
                        }}
                        getValuesFromInputs={onInputChangeHandler}
                    />
                    <Box sx={{mt: 2, textAlign: "end"}}>
                        <Button
                            variant="contained"
                            color="success"
                            type="submit"
                        >
                            Δημιουργία
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    )
}

export default CreateProductModal;
