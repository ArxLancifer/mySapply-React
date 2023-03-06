import { IModel } from "./IModel";
import {IOrderItem} from "./IOrder";
import {IProduct} from "./IAlcoholDrink";

export interface IUserPost {
    username: string;
    password: string;
}

export interface IUser extends IModel {
    email: string;
    username: string;
    confirmedUsers: any[];
    phone: number;
    address: string;
    postalCode: string;
    orders: IOrderItem[];
    favorites: IProduct[];
}
