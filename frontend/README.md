# Yono Game Frontend

This is the frontend for the Yono Game application. It is built using Vite, React, and TypeScript.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd frontend
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

The frontend uses axios to send HTTP requests to the backend server. Here are the main requests:

- **Get Games**: Sends a GET request to `${import.meta.env.VITE_BACKENDURL}/game/getgames` to retrieve the list of games.

### Folder Structure

- **components**: Contains reusable React components.
- **pages**: Contains the main pages of the frontend.
- **assets**: Contains static assets like images and icons.
- **src**: Contains the main entry point and other source files.

### Running the Code

1. Ensure the backend server is running and the `VITE_BACKENDURL` environment variable is set correctly.
2. Follow the installation steps mentioned above.
3. Use a tool like Postman to test the API endpoints.

## License

This project is licensed under the MIT License.
