import {useContext} from "react";
import AuthContext from "../../components/store/auth/AuthContext";
import {Container, Typography} from "@mui/material";

function Profile() {
    const {user} = useContext(AuthContext);

    return (
        <Container>
            <Typography sx={{mt: 4}} variant="h5">
                Γεια σου {user.username}
            </Typography>
        </Container>
    )
}

export default Profile;
