import {IModel} from "./IModel";
import {IProduct} from "./IAlcoholDrink";

export interface IOrder extends IModel {
    title: string,
    totalAmount: string | number,
    createdAt: string;
    date?: string;
    status: string,
}

export interface IOrderItem extends IModel {
    order?: string | IOrder;
    product?: string | IProduct;
    productEntity: string;
    quantity: number;
    price: string | number;
    productForOrderEntity: string | IProduct;
    date?: string;
}

export interface IFormatedOrderData {
    date: string;
    status: string;
    title: string;
    totalAmount: number;
    _id: string;
}
