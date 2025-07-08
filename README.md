# IELTS Tutoria

IELTS Tutoria is a comprehensive platform designed to help students prepare for the IELTS exam. It provides a variety of resources, including practice tests, study materials, and a tutor marketplace.

## Technologies Used

This project is a full-stack MERN application built with the following technologies:

- **Frontend:**
  - React
  - Vite
  - TypeScript
  - shadcn/ui
  - Tailwind CSS
  - React Router
  - Axios
- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - JWT (for authentication)
  - Multer (for file uploads)
  - Nodemailer (for email services)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add the following environment variables:
    ```
    MONGO_URI=mongodb://localhost:27017/ielts-tutoria
    JWT_SECRET=your_jwt_secret
    ```

### Running the Application

1.  **Start the Backend Server:**
    ```bash
    npm run start
    ```
2.  **Start the Frontend Development Server:**
    ```bash
    npm run dev
    ```
3.  **Access the Application:**
    Open your web browser and navigate to `http://localhost:8080`.

