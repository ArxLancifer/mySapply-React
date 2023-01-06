import {useContext} from "react";
import AuthContext from "../../components/store/auth/AuthContext";
import {Box, Button, Container, Typography} from "@mui/material";
import ReceiptIcon from '@mui/icons-material/Receipt';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BuildIcon from '@mui/icons-material/Build';
import {Link} from "react-router-dom";

function Profile() {
    const {user, logout} = useContext(AuthContext);

    const linkStyle = {
        textDecoration: "none",
        color: "inherit"
    }

    return (
        <Container>
            <Typography sx={{mt: 4}} variant="h5">
                Γεια σου {user.username}
            </Typography>
            <Link to={"/profile/orders"}>
            <Box
                sx={{backgroundColor: "#e3e3e3", display: "flex", alignItems: "center", py: 1, mt: 3, borderRadius: 2}}>
                <ReceiptIcon sx={{ml: 2, mr: 1}}/>
                <Typography variant="h6">
                    Παραγγελίες
                </Typography>
                <Box sx={{flexGrow: 1}}></Box>
                <ArrowForwardIosIcon sx={{mr: 1}}/>
            </Box>
            </Link>
            <Link style={linkStyle} to="/profile/settings">
                <Box sx={{
                    backgroundColor: "#e3e3e3",
                    display: "flex",
                    alignItems: "center",
                    py: 1,
                    mt: 3,
                    borderRadius: 2
                }}>
                    <BuildIcon sx={{ml: 2, mr: 1}}/>
                    <Typography variant="h6">
                        Ρυθμίσεις
                    </Typography>
                    <Box sx={{flexGrow: 1}}></Box>
                    <ArrowForwardIosIcon sx={{mr: 1}}/>
                </Box>
            </Link>
            <Box sx={{display: "flex", justifyContent: "center", mt: 3}}>
                <Button
                    color="error"
                    variant="outlined"
                    onClick={logout}
                >
                    Αποσύνδεση
                </Button>
            </Box>
        </Container>
    )
}

export default Profile;
