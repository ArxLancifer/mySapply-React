import {FormEvent, ReactNode, useState} from "react";
import {IUser, IUserPost} from "../../../interfaces/IUser";
import AuthContext from "./AuthContext";
import {useNavigate} from "react-router-dom";
import axios from "axios";

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
            const response = await fetch(`http://localhost:5500/signup`, requestOptions);
            const data = await response.json();

            if (data === "Invalid email, or username or password") {
                return;
            }
            navigate("/login");
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

        const userData: IUser | string = await userAuthData.json();
        if ((userData as string) === "Invalid user") { return; }

        setUser((userData as IUser));
        setIsLoggedIn(true);
        navigate("/");
    }

    const logout = async (event: any) => {
        try {
            await axios({method: "DELETE", url: "http://localhost:5500/logout", withCredentials: true});
            setIsLoggedIn(false);
            setUser({});
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider value={{isLoggedIn, user, login, signup, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
