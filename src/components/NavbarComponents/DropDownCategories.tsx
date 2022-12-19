import React from "react";
import { Box } from "@mui/system";
import CategoriesContainer from "./DropDownComponents/CategoriesContainer";
import { Modal } from "@mui/material";
import styled from "@emotion/styled";
import Backdrop from "@mui/material";

function DropDownCategories(props: any) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.toggleModal}
        style={{backgroundColor:"rgb(0, 0, 0, 0.5)"}}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position:'relative',
            top:"18%",
            px: "2%",
            maxWidth: "1100px",
            mx: "auto",
            borderRadius: "8px",
            boxShadow: "2px 2px 10px 5px #4b4b4b",
            backgroundColor: "#fff",
          }}
        >
          <CategoriesContainer />
        </Box>
      </Modal>
    </div>
  );
}

export default DropDownCategories;
