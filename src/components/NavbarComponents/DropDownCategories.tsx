import React from "react";
import {Box} from "@mui/system";
import CategoriesContainer from "./DropDownComponents/CategoriesContainer";
import {Modal} from "@mui/material";

function DropDownCategories(props: {toggleModal: any, open: boolean}) {
    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.toggleModal}
                // aria-labelledby="modal-modal-title"
                // aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'relative',
                        top: "18%",
                        maxWidth: "1100px",
                        mx: "auto",
                        borderRadius: "8px",
                        boxShadow: "2px 2px 10px 5px #4b4b4b",
                        backgroundColor: "#fff",
                    }}
                >
                    <CategoriesContainer/>
                </Box>
            </Modal>
        </div>
    );
}

export default DropDownCategories;
