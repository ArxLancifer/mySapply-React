import {IModel} from "./IModel";
import {IProductSubCategory} from "./ICategory";

export interface IAlcoholDrink extends IModel{
    userCustomers: any[];
    subCategory: IProductSubCategory | string;
    brandName: string;
    price: number;
    slug: string;
    alcoholVol: number;
    weightML: string;
    title: string;
}

export interface IProduct extends IModel{
    userCustomers: any[];
    subCategory: IProductSubCategory | string;
    brandName: string;
    price: number;
    slug: string;
    alcoholVol: number;
    weightML: string;
    title: string;
}
