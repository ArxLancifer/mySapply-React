import React, {createContext, FormEvent} from 'react';
import {IUser} from "../../../interfaces/IUser";

type IAuthContext = {
    isLoggedIn: boolean;
    user: Partial<IUser>;
    login: (event: FormEvent<HTMLFormElement>, username: string, password: string) => {};
    signup: (event: FormEvent<HTMLFormElement>, payload: {email: string, username: string, password: string}) => {};
    logout: (event: any) => {};
}

const AuthContext = createContext<IAuthContext>({
    isLoggedIn: false,
    user: {},
    login: (event: FormEvent<HTMLFormElement>, username: string, password: string) => {},
    signup: (event: FormEvent<HTMLFormElement>, payload: {email: string, username: string, password: string}) => {},
    logout: (event: any) => {}
} as IAuthContext);

export default AuthContext;
