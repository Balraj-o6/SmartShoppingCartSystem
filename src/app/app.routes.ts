import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { ProductCatalog } from './pages/product-catalog/product-catalog';
import { ProductDetails } from './pages/product-details/product-details';
import { CartView } from './pages/cart-view/cart-view';
import { Checkout } from './pages/checkout/checkout';
import { OrderHistory } from './pages/order-history/order-history';
import { CustomerProfile } from './pages/customer-profile/customer-profile';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        component: Home
    },

    {
        path: 'products',
        component: ProductCatalog
    },

    {
        path: 'products/:id',
        component: ProductDetails
    },

    {
        path: 'cart',
        component: CartView
    },

    {
        path: 'checkout',
        component: Checkout
    },

    {
        path: 'orders',
        component: OrderHistory
    },

    {
        path: 'profile',
        component: CustomerProfile
    },

    {
        path: 'about',
        component: About
    },

    {
        path: 'contact',
        component: Contact
    },

    {
        path: '404',
        component: NotFound
    },

    {
        path: '**',
        redirectTo: '404'
    }
];