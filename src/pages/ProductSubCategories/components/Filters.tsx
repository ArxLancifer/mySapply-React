import {Box, Button, Modal, Slider} from "@mui/material";
import {Fragment, useState} from "react";
import modalStyles from "../../../components/admin/components/modal.module.css";
import FilterSlider from "./filters/FilterSlider";
import TuneIcon from '@mui/icons-material/Tune';

function Filters() {
    const [open, setOpen] = useState<boolean>(false);
    const openModalHandler = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Fragment>
            <Button
                sx={{
                    display: {lg: "none"},
                    borderRadius: "30px",
                    position: "absolute",
                    bottom: "2%",
                    right: "5%",
                    px: 3,
                    py: 2
                }}
                onClick={openModalHandler}
                variant="contained"
                color="primary"
            >
                <TuneIcon sx={{mr: 1}} />
                Φίλτρα
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box className={modalStyles.modal}>
                    <FilterSlider />
                </Box>
            </Modal>
        </Fragment>
    )
}

export default Filters
