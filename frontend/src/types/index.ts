export interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface PaymentInfo {
    cardNumber: string;
    cardHolderName: string;
    expirationDate: string;
    cvv: string;
}