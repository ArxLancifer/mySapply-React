import React, {createContext, FormEvent} from 'react';
import {IUser} from "../../../interfaces/IUser";

type IAuthContext = {
    isLoggedIn: boolean;
    user: Partial<IUser>;
    login: (event: FormEvent<HTMLFormElement>, username: string, password: string) => {};
}

const AuthContext = createContext<IAuthContext>({
    isLoggedIn: false,
    login: (event: FormEvent<HTMLFormElement>, username: string, password: string) => {},
    user: {}
} as IAuthContext);

export default AuthContext;
