import React, {FormEvent, useContext, useState} from 'react';
import {Box, Button, Modal} from "@mui/material";
import {IProductCategory, IProductSubCategory} from "../../../interfaces/ICategory";
import FormInputField from "../../UI/FormInputField";
import HomeContext from "../../store/home-context";
import styles from "./modal.module.css";

function UpdateModal(props: { value: boolean, subCategory: IProductSubCategory, setModal: any }) {
    const ctx = useContext(HomeContext) as IProductCategory[];
    const [formValue, setFormValue] = useState<IProductSubCategory>({_id: "", title: "", slug: "", imageUrl: "", category: ""});

    const update = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formValue)
            };
            await fetch(`http://localhost:5500/products/sub-categories/${props.subCategory?._id}`, requestOptions);
            handleClose();
        } catch (e) {
            console.log(e);
        }
    };
    const handleClose = () => props.setModal(false);

    const onInputChangeHandler = (value: {[key: string]: string}) => {
        setFormValue((prevValue) => {
            return {
                ...prevValue,
                ...value
            }
        });
    };

    return (
        <Modal
            open={props.value}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.modal}>
                <form onSubmit={update}>
                    <FormInputField
                        form={{
                            id: "title",
                            label: "Title",
                            variant: "filled",
                            type: "text",
                            notSelect: true
                        }}
                        getValuesFromInputs={onInputChangeHandler}
                        subCategoryProp={props.subCategory?.title}
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
                        subCategoryProp={props.subCategory?.slug}
                    />
                    <FormInputField
                        form={{
                            id:"imageUrl",
                            label:"Image Url",
                            variant:"filled",
                            type:"text",
                            notSelect: true
                        }}
                        getValuesFromInputs={onInputChangeHandler}
                        subCategoryProp={props.subCategory?.imageUrl}
                    />
                    <FormInputField
                        form={{
                            id:"category",
                            label:"Category",
                            variant:"filled",
                            text: "Select category to generate id",
                            notSelect: false
                        }}
                        categories={ctx}
                        getValuesFromInputs={onInputChangeHandler}
                    />
                    <Box sx={{ mt: 2, textAlign: "end" }}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Ενημέρωση
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    )
}

export default UpdateModal;
