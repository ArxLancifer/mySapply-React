export type VariantType = "filled" | "outlined" | "standard";

export interface IFormControl {
    id: string;
    label: string;
    variant: VariantType;
    type?: string;
    notSelect: boolean;
    text?: string;
}