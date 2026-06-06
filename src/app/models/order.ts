import { CartItem } from './cart';

export interface ShippingInfo {
    fullName: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
}

export interface Order {
    orderId: number;
    orderDate: Date;
    items: CartItem[];
    shippingInfo: ShippingInfo;
    paymentMethod: string;
    orderNotes: string;
    subtotal: number;
    discount: number;
    tax: number;
    total: number;
    status: string;
}