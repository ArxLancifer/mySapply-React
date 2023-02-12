import React, {FormEvent, useContext, useState} from "react";
import {Box, Button, Modal} from "@mui/material";
import styles from "../../components/modal.module.css";
import FormInputField from "../../../UI/FormInputField";
import {IProduct} from "../../../../interfaces/IAlcoholDrink";
import {IProductCategory, IProductSubCategory} from "../../../../interfaces/ICategory";
import {useDispatch, useSelector} from "react-redux";
import {adminProductsActions, AdminProductState} from "../../../../store/admin/AdminProducts";
import {createNewProduct} from "../../../../store/admin/adminProducts-actions";
import HomeContext from "../../../store/home-context";

function CreateProductModal() {
    const categoriesCtx = useContext(HomeContext);
    const dispatch = useDispatch();

    const [formValue, setFormValue] = useState<Partial<IProduct>>({});

    const subCategory = useSelector<{adminProducts: AdminProductState}>(state => state.adminProducts.subCategory) as IProductSubCategory;
    const isOpen = useSelector<{adminProducts: AdminProductState}>(state => state.adminProducts.isShow) as boolean;

    const createProduct = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(createNewProduct(event, formValue) as any);
    }

    const onInputChangeHandler = (value: { [key: string]: string }) => {
        setFormValue((prevValue) => {
            return {
                ...prevValue,
                ...value
            }
        });
    }

    const handleClose = () => {
        dispatch(adminProductsActions.handleClose(false));
    };

    return (
        <Modal
            open={isOpen}
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
                        categories={categoriesCtx as IProductCategory[]}
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
                        categories={(subCategory?.category as IProductCategory)?.subCategories}
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
