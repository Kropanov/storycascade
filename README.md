# StoryCascade

This repository contains two projects: a client-side application built with Vue.js version 3 and a server-side application built with Nest.js. These projects collectively form StoryCascade, a service for writing and reading novels in English.

## Projects

### Vue3 Client

The Vue3 Client is a front-end application developed using Vue.js version 3. It provides an interactive interface for users to write, read, and manage novels. The client-side application utilizes modern technologies to ensure a seamless user experience.

#### Technologies Used:

- Vue.js 3
- Vuetify
- Pinia
- Vue Router
- Vite

### NestJS Server

The NestJS Server is a back-end application developed with Nest.js, a progressive Node.js framework. It serves as the backbone of the StoryCascade service, handling authentication, data storage, and providing an API for communication between the client and the database.

#### Technologies Used:

- Nest.js
- Redis
- JWT
- TypeScript

## Getting Started

To run these projects locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the `client` directory and the `server` directory separately.
3. Install dependencies for both projects using `npm install`.
4. Configure environment variables for the server (e.g., MongoDB connection string, JWT secret).
5. Start the server by running `npm start:dev` in the `server` directory.
6. Start the client by running `npm run dev` in the `client` directory.
7. Access the application in your web browser at `http://localhost:3000` for the client and `http://localhost:4000` for the server.

## Contributing

Contributions to StoryCascade are welcome! If you have ideas for new features, find bugs, or want to improve the codebase, feel free to submit issues and pull requests.

## License

This project is licensed under the BSD 2-Clause License - see the [LICENSE](LICENSE.md) file for details.
