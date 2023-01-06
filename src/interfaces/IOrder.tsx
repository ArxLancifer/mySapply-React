import {IModel} from "./IModel";

export interface IOrder extends IModel {
    title:string,
    totalAmount:string | number,
    createdAt:string;
    date?: string;
}
