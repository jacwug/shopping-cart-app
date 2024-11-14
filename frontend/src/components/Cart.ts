/**
 * Represents a shopping cart.
 */
class Cart {
    private items: CartItem[] = [];

    /**
     * Adds an item to the cart.
     * @param {Product} product - The product to add.
     * @param {number} quantity - The quantity of the product.
     */
    addItem(product: Product, quantity: number): void {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }

    /**
     * Removes an item from the cart by product ID.
     * @param {number} productId - The ID of the product to remove.
     */
    removeItem(productId: number): void {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    /**
     * Updates the quantity of a specific item in the cart.
     * @param {number} productId - The ID of the product to update.
     * @param {number} quantity - The new quantity of the product.
     */
    updateQuantity(productId: number, quantity: number): void {
        const existingItem = this.items.find(item => item.product.id === productId);
        if (existingItem) {
            existingItem.quantity = quantity;
        }
    }

    /**
     * Calculates the total amount of the cart.
     * @returns {number} The total amount.
     */
    getTotalAmount(): number {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }

    /**
     * Gets all items in the cart.
     * @returns {CartItem[]} An array of cart items.
     */
    getItems(): CartItem[] {
        return this.items;
    }

    /**
     * Clears all items from the cart.
     */
    clearCart(): void {
        this.items = [];
    }
}

export default Cart;