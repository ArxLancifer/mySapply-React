import {IProductCategory, IProductSubCategory} from "./ICategory";

export type VariantType = "filled" | "outlined" | "standard";

export interface IFormInputField {
    form: IFormControl;
    categories?: IProductCategory[] | IProductSubCategory[] | any[];
    getValuesFromInputs: (value: {[key: string]: string}) => void;
    subCategoryProp?: any;
}

export interface IFormControl {
    id: string;
    label: string;
    variant: VariantType;
    type?: string;
    notSelect: boolean;
    text?: string;
}
