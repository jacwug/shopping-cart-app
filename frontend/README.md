# Shopping Cart Application Frontend

This is the frontend part of the shopping cart application developed using TypeScript, CSS, and HTML. The application allows users to browse products, add them to a shopping cart, view cart contents, and proceed to checkout.

## Project Structure

- **src/**: Contains the source code for the frontend application.
  - **index.html**: The main HTML file that serves as the entry point for the application.
  - **styles.css**: Contains styles for the application.
  - **app.ts**: The main TypeScript file that initializes the application.
  - **components/**: Contains TypeScript files for different components of the application.
    - **ProductList.ts**: Manages the product listing and adding products to the cart.
    - **Cart.ts**: Manages the shopping cart's contents.
    - **Checkout.ts**: Handles the checkout process.
  - **types/**: Contains TypeScript interfaces for data structures used in the application.
    - **index.ts**: Defines interfaces for Product, CartItem, and PaymentInfo.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:
   ```
   cd shopping-cart-app/frontend
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the frontend application, run:
```
npm start
```

This will launch the application in your default web browser.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.