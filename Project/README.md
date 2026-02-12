# ShopBrand - MERN Stack E-commerce Application

ShopBrand is a full-featured e-commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides a seamless shopping experience with user authentication, product browsing, dynamic search and filtering, and a shopping cart with persistent state.

## 🚀 Features

### Frontend
*   **Modern UI/UX**: Built with **React** and **Tailwind CSS** for a responsive and beautiful design (Dark/Light mode support).
*   **State Management**: Utilizes **Redux Toolkit** for efficient state management across the app.
*   **Data Persistence**: Integrated **Redux Persist** to save cart items and user session even after page reloads.
*   **Dynamic Product Handling**:
    *   **Search**: Real-time product searching from the Navbar.
    *   **Sorting**: Sort products by price (Low/High) or name (A-Z/Z-A).
    *   **Filtering**: Filter products by category.
*   **Authentication**: Secure Login and Signup forms using **Formik** and **Yup** for validation.
*   **Shopping Cart**: Add, remove, and clear items from the cart with automatic total calculation.
*   **Routing**: Client-side routing with **React Router v6**.

### Backend
*   **RESTful API**: Built with **Express.js**.
*   **Database**: **MongoDB** with **Mongoose** for data modeling.
*   **Security**:
    *   **JWT (JSON Web Tokens)** for secure user authentication.
    *   **Bcrypt** for password hashing.
*   **User Management**: Register, Login, and Profile management endpoints.
*   **Email Notifications**: Integration with **Nodemailer** to send email alerts (e.g., login notifications).

## 🛠️ Technology Stack

*   **Frontend**: React, Vite, Redux Toolkit, React-Redux, Redux-Persist, Tailwind CSS, Axios, Formik, Yup, React Router DOM.
*   **Backend**: Node.js, Express.js, Mongoose, MongoDB, JWT, Bcryptjs, Nodemailer, Dotenv, Cors.
*   **Tools**: Git, npm/yarn, VS Code.

## 📂 Project Structure

```bash
Project/
├── Backend/          # Server-side code
│   ├── controllers/  # Route controllers (Auth, Order, Mail)
│   ├── models/       # Mongoose models (User)
│   ├── index.js      # App entry point
│   └── .env          # Backend environment variables
│
└── Frontend/         # Client-side code
    ├── src/
    │   ├── components/ # React components (Navbar, Home, Cart, Login, etc.)
    │   ├── redux/      # Redux setup (Slices, Store)
    │   ├── api/        # Axios configuration
    │   └── App.jsx     # Main React component
    └── ...
```

## ⚙️ Installation & Setup

### Prerequisites
*   Node.js installed on your machine.
*   MongoDB installed locally or a MongoDB Atlas connection string.

### 1. Backend Setup

1.  Navigate to the backend directory:
    ```bash
    cd Backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `Backend` directory and configure your environment variables:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/web12_project
    JWT_SECRET=your_jwt_secret_key
    # Optional: Email configuration for Nodemailer
    # EMAIL_USER=your_email@gmail.com
    # EMAIL_PASS=your_email_password
    ```
4.  Start the server:
    ```bash
    npm run dev
    ```
    The server will start on `http://localhost:3000`.

### 2. Frontend Setup

1.  Navigate to the frontend directory:
    ```bash
    cd Frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`).

## 🗝️ API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Register a new user |
| **POST** | `/api/auth/login` | Login user & return JWT |
| **GET** | `/api/auth/profile` | Get logged-in user profile (Protected) |
| **PUT** | `/api/auth/profile` | Update user profile (Protected) |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License.
