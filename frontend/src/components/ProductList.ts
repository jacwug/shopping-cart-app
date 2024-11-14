class ProductList {
    products: Array<{ id: number; name: string; price: number; image: string }> = [];

    async fetchProducts() {
        const response = await fetch('/api/products');
        this.products = await response.json();
        this.displayProducts();
    }

    displayProducts() {
        const productContainer = document.getElementById('product-list');
        if (productContainer) {
            productContainer.innerHTML = '';
            this.products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'product';
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price.toFixed(2)}</p>
                    <button onclick="addToCart(${product.id})">添加到购物车</button>
                `;
                productContainer.appendChild(productElement);
            });
        }
    }
}

function addToCart(productId: number) {
    // Logic to add product to cart
}