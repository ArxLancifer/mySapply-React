import {Container, Typography} from "@mui/material";
import {useContext} from "react";
import AuthContext from "../store/auth/AuthContext";

function UserAvatar() {
    const {user} = useContext(AuthContext);
    const username = user.username;
    const firstLetterOfUsername = username?.charAt(0);
    return (
        <Container sx={{textAlign: "end", mt: 2}}>
            <Typography sx={{textTransform: "uppercase", backgroundColor: "#DB4437", display: "inline-flex", px: 2, py: 1, borderRadius: "50%"}}>
                {firstLetterOfUsername}
            </Typography>
        </Container>
    )
}

export default UserAvatar;
