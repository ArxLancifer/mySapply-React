import { IModel } from "./IModel";

export interface IProductCategory extends IModel {
    title: string;
    products: string[];
    imageUrl: string;
}