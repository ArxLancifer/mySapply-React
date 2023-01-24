import React, {FormEvent, useContext, useState} from "react";
import {IProductCategory, IProductSubCategory} from "../../../../interfaces/ICategory";
import {Box, Button, Modal} from "@mui/material";
import styles from "../../components/modal.module.css";
import FormInputField from "../../../UI/FormInputField";
import axios from "axios";

function AdminUpdateCategory(props: { value: boolean, category: Partial<IProductCategory>, setModal: (boolean: boolean) => void }) {
    const [formValue, setFormValue] = useState<IProductSubCategory>({
        _id: "",
        title: "",
        slug: "",
        imageUrl: "",
        category: ""
    });
    const baseUrl = "admin/products/categories";
    const update = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await axios.put(`http://localhost:5500/${baseUrl}/${props.category?._id}`, formValue, {withCredentials: true});
        handleClose();
    };
    const handleClose = () => props.setModal(false);

    const onInputChangeHandler = (value: { [key: string]: string }) => {
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
                        subCategoryProp={props.category?.title}
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
                        subCategoryProp={props.category?.slug}
                    />
                    <FormInputField
                        form={{
                            id: "imageUrl",
                            label: "Image Url",
                            variant: "filled",
                            type: "text",
                            notSelect: true
                        }}
                        getValuesFromInputs={onInputChangeHandler}
                        subCategoryProp={props.category?.imageUrl}
                    />
                    <FormInputField
                        form={{
                            id: "modelRef",
                            label: "Model Reference",
                            variant: "filled",
                            type: "text",
                            notSelect: true
                        }}
                        getValuesFromInputs={onInputChangeHandler}
                        subCategoryProp={props.category?.modelRef}
                    />
                    <Box sx={{mt: 2, textAlign: "end"}}>
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

export default AdminUpdateCategory;
