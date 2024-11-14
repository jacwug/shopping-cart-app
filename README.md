# Shopping Cart Application

This is a shopping cart application developed using TypeScript, CSS, HTML, and Python. The application allows users to browse products, add them to a shopping cart, view the cart contents, and proceed to checkout.

## Project Structure

```
shopping-cart-app
├── backend
│   ├── app.py                # Main entry point for the backend application
│   ├── requirements.txt      # Python dependencies for the backend
│   └── README.md             # Documentation for the backend
├── frontend
│   ├── src
│   │   ├── index.html        # Main HTML file for the frontend
│   │   ├── styles.css        # Styles for the frontend
│   │   ├── app.ts            # Main entry point for the frontend application
│   │   ├── components
│   │   │   ├── ProductList.ts # Component for displaying products
│   │   │   ├── Cart.ts        # Component for managing the shopping cart
│   │   │   └── Checkout.ts    # Component for handling checkout
│   │   └── types
│   │       └── index.ts      # Type definitions for the application
│   ├── package.json          # Configuration file for npm
│   ├── tsconfig.json         # TypeScript configuration file
│   └── README.md             # Documentation for the frontend
└── README.md                 # Overall documentation for the application
```

## Setup Instructions

1. **Backend Setup**
   - Navigate to the `backend` directory.
   - Install the required Python packages using `pip install -r requirements.txt`.
   - Run the backend server with `python app.py`.

2. **Frontend Setup**
   - Navigate to the `frontend` directory.
   - Install the required npm packages using `npm install`.
   - Start the frontend application with `npm start`.

## Features

- Browse and view products
- Add products to the shopping cart
- View and manage cart contents
- Checkout process with payment information

## Technologies Used

- **Frontend**: TypeScript, CSS, HTML
- **Backend**: Python

For more detailed information about each part of the application, please refer to the respective README files in the `backend` and `frontend` directories.