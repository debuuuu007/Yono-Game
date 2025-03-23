# Yono Game Project

This repository contains the Yono Game project, which includes both the frontend and backend components. The project is built using modern web technologies such as React, TypeScript, Vite, and Node.js.

## Project Structure

The project is divided into three main parts:
- **frontend**: Contains the user-facing part of the application.
- **backend**: Contains the server-side logic and API endpoints.
- **admin**: Contains the admin panel for managing the game content.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd projects/game
   ```

2. Install dependencies for each part of the project:
   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   cd ../admin
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:
   ```env
   MONGODB_URL=<your-mongodb-url>
   JWT_SECRET=<your-jwt-secret>
   PORT=3000
   ```

4. Create a `.env` file in the `frontend` and `admin` directories and add the following environment variables:
   ```env
   VITE_BACKENDURL=http://localhost:3000
   ```

### Running the Project

1. Start the backend server:
   ```sh
   cd backend
   npm start
   ```

2. Start the frontend development server:
   ```sh
   cd frontend
   npm run dev
   ```

3. Start the admin panel development server:
   ```sh
   cd admin
   npm run dev
   ```

### Folder Structure

- **frontend**: Contains the user-facing part of the application.
  - **src**: Contains the source code for the frontend.
  - **public**: Contains static assets for the frontend.
  - **index.html**: The main HTML file for the frontend.

- **backend**: Contains the server-side logic and API endpoints.
  - **controller**: Contains the logic for handling requests and responses.
  - **db**: Contains the database connection configuration.
  - **models**: Contains the Mongoose schemas for the database.
  - **routes**: Contains the route definitions and validations.
  - **service**: Contains the business logic and interactions with the database.
  - **server.js**: The main entry point for the backend server.

- **admin**: Contains the admin panel for managing the game content.
  - **src**: Contains the source code for the admin panel.
  - **public**: Contains static assets for the admin panel.
  - **index.html**: The main HTML file for the admin panel.

## License

This project is licensed under the MIT License.
