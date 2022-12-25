import { IProductCategory } from "./ICategory";

export type VariantType = "filled" | "outlined" | "standard";

export interface IFormInputField {
    form: IFormControl;
    categories?: IProductCategory[];
    getValuesFromInputs: (value: {[key: string]: string}) => void;
}

export interface IFormControl {
    id: string;
    label: string;
    variant: VariantType;
    type?: string;
    notSelect: boolean;
    text?: string;
}