import React, {FormEvent, useContext, useState} from "react";
import HomeContext from "../../store/home-context";
import {IProductCategory, IProductSubCategory} from "../../../interfaces/ICategory";
import FormInputField from "../../UI/FormInputField";
import {Box, Button, Modal} from "@mui/material";

function CreateModal(props: { value: boolean, setModal: any }) {
    const ctx = useContext(HomeContext) as IProductCategory[];
    const [formValue, setFormValue] = useState<IProductSubCategory>({
        title: "",
        slug: "",
        imageUrl: "",
        category: "6398e885e879cfad4454da59"
    });
    const createSubCategory = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formValue)
            };
            await fetch(`http://localhost:5500/products/sub-categories`, requestOptions);
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

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        borderRadius: "5px",
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const handleClose = () => props.setModal(false);

    return (
        <Modal
            open={props.value}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form onSubmit={createSubCategory}>
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
                            id: "slug",
                            label: "Slug",
                            variant: "filled",
                            type: "text",
                            notSelect: true
                        }}
                        getValuesFromInputs={onInputChangeHandler}
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
                    />
                    <FormInputField
                        form={{
                            id: "category",
                            label: "Category",
                            variant: "filled",
                            text: "Select category to generate id",
                            notSelect: false
                        }}
                        categories={ctx}
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

export default CreateModal;
