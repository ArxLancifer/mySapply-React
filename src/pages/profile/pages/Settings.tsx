import {Box, Button, Container, FormControl, TextField} from "@mui/material";
import React, {ChangeEvent, FormEvent, useContext, useState} from "react";
import AuthContext from "../../../components/store/auth/AuthContext";
import {IUser} from "../../../interfaces/IUser";

function Settings() {
    let {user} = useContext(AuthContext);
    const [value, setValue] = useState<Partial<IUser>>({});

    const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
        const inputFields = event.target.id
        setValue({
            ...user,
            [inputFields]: event.target.value
        });
    };

    const updateUser = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // return console.log(value);
        try {
            const userInfo: {dataToUpdate: Partial<IUser>, _id: any} = {
                dataToUpdate: {
                    username: value.username,
                    email: value.email,
                },
                _id: user._id
            };
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userInfo)
            };
            await fetch(`http://localhost:5500/profile/settings`, requestOptions);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Container maxWidth="sm">
            <form onSubmit={updateUser}>
                <FormControl fullWidth>
                    <TextField
                        sx={{mt: 5}}
                        id="username"
                        label="Username"
                        variant="filled"
                        type="text"
                        onChange={handleValue}
                        value={value.username ? value.username : user?.username}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                        sx={{mt: 2}}
                        id="email"
                        label="E-mail"
                        variant="filled"
                        type="email"
                        onChange={handleValue}
                        value={value.email ? value.email : user?.email}
                    />
                </FormControl>
                {/*<FormControl fullWidth>*/}
                {/*    <TextField*/}
                {/*        sx={{mt: 2}}*/}
                {/*        id="password"*/}
                {/*        label="Password"*/}
                {/*        variant="filled"*/}
                {/*        type="password"*/}
                {/*        // onChange={(event) => {handleValue(event.target.value)}}*/}
                {/*        value={value}*/}
                {/*    />*/}
                {/*</FormControl>*/}
                <FormControl fullWidth>
                    <TextField
                        sx={{mt: 2}}
                        id="phone"
                        label="Phone"
                        variant="filled"
                        type="number"
                        // onChange={(event) => {handleValue(event.target.value)}}
                        value={user?.phone}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                        sx={{mt: 2}}
                        id="address"
                        label="Address"
                        variant="filled"
                        type="text"
                        // onChange={(event) => {handleValue(event.target.value)}}
                        value={user?.address}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                        sx={{mt: 2}}
                        id="postalCode"
                        label="Postal code"
                        variant="filled"
                        type="number"
                        // onChange={(event) => {handleValue(event.target.value)}}
                        value={user?.postalCode}
                    />
                </FormControl>
                <Box sx={{ mt: 2, textAlign: "end" }}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Ενημέρωση
                    </Button>
                </Box>
            </form>
        </Container>
    )
}

export default Settings;
