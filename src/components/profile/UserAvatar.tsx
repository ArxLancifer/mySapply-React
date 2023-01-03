import {Container, Typography} from "@mui/material";
import {useContext} from "react";
import AuthContext from "../store/auth/AuthContext";
import {Link} from "react-router-dom";

function UserAvatar() {
    const {user} = useContext(AuthContext);
    const username = user.username;
    const firstLetterOfUsername = username?.charAt(0);

    const styleLink = {
        textDecoration: "none",
        color: "inherit"
    }
    return (
        <Container sx={{textAlign: "end", mt: 2}}>
            <Link style={styleLink} to="/profile">
                <Typography sx={{textTransform: "uppercase", backgroundColor: "#DB4437", display: "inline-flex", px: 2, py: 1, borderRadius: "50%"}}>
                    {firstLetterOfUsername}
                </Typography>
            </Link>
        </Container>
    )
}

export default UserAvatar;
