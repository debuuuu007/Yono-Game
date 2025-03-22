# Yono Game Admin Panel

This is the admin panel for the Yono Game application. It is built using Vite, React, and TypeScript.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd admin
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   VITE_BACKENDURL=<your-backend-url>
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

### Environment Variables

- `VITE_BACKENDURL`: The URL of the backend server. This is used by axios to send requests to the backend.

### Axios Requests

The admin panel uses axios to send HTTP requests to the backend server. Here are the main requests:

- **Register Admin**: Sends a POST request to `${import.meta.env.VITE_BACKENDURL}/admin/register` with the admin's full name, email, and password.
- **Login Admin**: Sends a POST request to `${import.meta.env.VITE_BACKENDURL}/admin/login` with the admin's email and password.
- **Add Game**: Sends a POST request to `${import.meta.env.VITE_BACKENDURL}/game/addgame` with the game's name, image, and download link.
- **Get Games**: Sends a GET request to `${import.meta.env.VITE_BACKENDURL}/game/getgames` to retrieve the list of games.

### Folder Structure

- **components**: Contains reusable React components.
- **pages**: Contains the main pages of the admin panel.
- **types**: Contains TypeScript type definitions.
- **src**: Contains the main entry point and other source files.

### Running the Code

1. Ensure the backend server is running and the `VITE_BACKENDURL` environment variable is set correctly.
2. Follow the installation steps mentioned above.
3. Use a tool like Postman to test the API endpoints.

## License

This project is licensed under the MIT License.
