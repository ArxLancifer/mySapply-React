import {Box, Container, Typography} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import "../../index.css";

function PageNotFound() {
    const location = useLocation();

    return (
        <Container>
            <Box sx={{textAlign: "center"}}>
                <Typography sx={{fontWeight: "bold", mt: 5}} variant="h4">
                    Χμμμ!
                </Typography>
                <Typography sx={{mt: 3}} variant="body1">
                    Το λαγωνικό μας δεν μπορεί να βρει την σελίδα <b>{location.pathname}</b> που ψάχνεις.
                </Typography>
                <Link className="link-style" to="/">
                    <Typography color="#1c7ece" sx={{mt: 3}} variant="body1">
                        Επιστροφή στην αρχική σελίδα
                    </Typography>
                </Link>
            </Box>

        </Container>
    )
}

export default PageNotFound;
