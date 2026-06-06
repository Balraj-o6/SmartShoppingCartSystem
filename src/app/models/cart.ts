import { Product } from './product';

export interface CartItem {
    productId: number;
    product: Product;
    quantity: number;
}

export interface CartSummary {
    items: CartItem[];
    itemCount: number;
    subtotal: number;
    discount: number;
    discountPercentage: number;
    tax: number;
    total: number;
}