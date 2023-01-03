import {FormEvent, ReactNode, useState} from "react";
import {IUser, IUserPost} from "../../../interfaces/IUser";
import AuthContext from "./AuthContext";
import {useNavigate} from "react-router-dom";

type AuthProviderProps = {
    children: ReactNode
}

function AuthProvider({children}: AuthProviderProps) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<Partial<IUser>>({});

    async function signup(event: FormEvent<HTMLFormElement>, payload: {email: string, username: string, password: string}) {
        event.preventDefault();
        const userInfo: IUserPost = {...payload};
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userInfo)
            };
            await fetch(`http://localhost:5500/signup`, requestOptions);
        } catch (e) {
            console.log(e);
        }
    }

    async function login(event: FormEvent<HTMLFormElement>, username: string, password: string) {
        event.preventDefault();
        const reqLoginData: IUserPost = {
            username,
            password
        };
        const userAuthData = await fetch("http://localhost:5500/login", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(reqLoginData),
            credentials: 'include'
        });

        const userData: IUser = await userAuthData.json();
        if (!userData) { return; }

        setUser(userData);
        setIsLoggedIn(true);
        navigate("/");
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, user, login, signup}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;