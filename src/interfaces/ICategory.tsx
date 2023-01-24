import { IModel } from "./IModel";

export interface IProductCategory extends IModel {
    title: string;
    slug: string;
    imageUrl: string;
    subCategories: IProductSubCategory[] | string[] | any;
    modelRef: string;
}

export interface IProductSubCategory extends IModel {
    title: string;
    slug: string;
    imageUrl: string;
    category: IProductCategory | string;
}
