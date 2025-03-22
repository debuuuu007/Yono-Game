# Yono Game Backend

This is the backend for the Yono Game application. It is built using Node.js, Express, and MongoDB.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   MONGODB_URL=<your-mongodb-url>
   JWT_SECRET=<your-jwt-secret>
   PORT=3000
   ```

4. Start the server:
   ```sh
   npm start
   ```

## Folder Structure

- **controller**: Contains the logic for handling requests and responses.
- **db**: Contains the database connection configuration.
- **models**: Contains the Mongoose schemas for the database.
- **routes**: Contains the route definitions and validations.
- **service**: Contains the business logic and interactions with the database.

## Routes

### Admin Routes

- **POST /admin/register**
  - Registers a new admin.
  - Request body:
    ```json
    {
      "fullname": "Admin Name",
      "email": "admin@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "msg": "Admin registered successfully"
    }
    ```

- **POST /admin/login**
  - Logs in an admin.
  - Request body:
    ```json
    {
      "email": "admin@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "msg": "Logged in successfully"
    }
    ```

### Game Routes

- **POST /game/addgame**
  - Adds a new game.
  - Request body:
    ```json
    {
      "gameName": "Game Name",
      "gameImage": "image-url",
      "gameLink": "game-link"
    }
    ```
  - Response:
    ```json
    {
      "msg": "Game added successfully"
    }
    ```

- **GET /game/getgames**
  - Retrieves all games.
  - Response:
    ```json
    [
      {
        "_id": "game-id",
        "gameName": "Game Name",
        "gameImage": "image-url",
        "gameLink": "game-link"
      },
      ...
    ]
    ```

## Explanation of Each Folder

- **controller**: This folder contains the logic for handling incoming requests and sending responses. It interacts with the service layer to perform operations.
  - `admin.controller.js`: Handles admin-related operations like registration and login.
  - `game.controller.js`: Handles game-related operations like adding and retrieving games.

- **db**: This folder contains the database connection configuration.
  - `mongoose.connection.js`: Establishes a connection to the MongoDB database using Mongoose.

- **models**: This folder contains the Mongoose schemas for the database.
  - `admin.model.js`: Defines the schema for the admin collection.
  - `gamedata.model.js`: Defines the schema for the game data collection.

- **routes**: This folder contains the route definitions and validations.
  - `admin.routes.js`: Defines the routes for admin-related operations.
  - `game.routes.js`: Defines the routes for game-related operations.

- **service**: This folder contains the business logic and interactions with the database.
  - `admin.service.js`: Contains the logic for creating and authenticating admins.
  - `game.service.js`: Contains the logic for adding and retrieving games.

## Running the Code

1. Ensure MongoDB is running on your machine or use a cloud MongoDB service.
2. Follow the installation steps mentioned above.
3. Use a tool like Postman to test the API endpoints.

## License

This project is licensed under the MIT License.
