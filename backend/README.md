# Shopping Cart Application Backend

This document provides an overview of the backend part of the shopping cart application.

## Overview

The backend is built using Python and serves as the API for managing products, shopping cart operations, and payment processing. It handles requests from the frontend and communicates with the database to perform necessary operations.

## File Structure

- `app.py`: The main entry point for the backend application. It sets up the server and defines API routes.
- `requirements.txt`: Lists the Python dependencies required for the backend application.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd shopping-cart-app/backend
   ```

2. **Install dependencies**:
   It is recommended to use a virtual environment. You can create one using:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
   Then install the required packages:
   ```
   pip install -r requirements.txt
   ```

3. **Run the application**:
   Start the server by running:
   ```
   python app.py
   ```

## API Endpoints

- **GET /products**: Fetches the list of available products.
- **POST /cart/add**: Adds a product to the shopping cart.
- **POST /cart/remove**: Removes a product from the shopping cart.
- **POST /checkout**: Processes the payment and completes the order.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.