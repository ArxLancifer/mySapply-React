import { IModel } from "./IModel";

export interface IProductCategory extends IModel {
    title: string;
    imageUrl: string;
    subCategories: IProductSubCategory[] | string[] | any;
}

export interface IProductSubCategory extends IModel {
    title: string;
    slug: string;
    imageUrl: string;
    category: IProductCategory | string;
}
