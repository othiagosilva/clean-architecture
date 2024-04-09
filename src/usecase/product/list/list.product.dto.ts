export interface InputListProductDto {}

type Product = {
    id: string;
    type: string;
    name: string;
    price: number;
};

export interface OutputListProductDto {
    products: Product[]
}