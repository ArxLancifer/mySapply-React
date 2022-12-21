import { IModel } from "./IModel";

export interface IUserPost {
    username: string;
    password: string;
}

export interface IUser extends IModel {
    email: string;
    username: string;
    confirmedUsers: any[];
}