// This file is the main entry point for the frontend application. 
// It initializes the application, sets up event listeners, and manages the state of the shopping cart.

import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';

const productList = new ProductList();
const cart = new Cart();
const checkout = new Checkout();

document.addEventListener('DOMContentLoaded', () => {
    productList.render();
    cart.render();
    
    document.getElementById('checkout-button')?.addEventListener('click', () => {
        checkout.render();
    });
});