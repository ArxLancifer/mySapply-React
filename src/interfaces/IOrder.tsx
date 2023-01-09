import {IModel} from "./IModel";
import {IProduct} from "./IAlcoholDrink";

export interface IOrder extends IModel {
    title:string,
    totalAmount:string | number,
    createdAt:string;
    date?: string;
    status:string,
}

export interface IOrderItem {
    order?: string | IProduct;
    productEntity: string;
    quantity: number;
    price: string | number;
}
