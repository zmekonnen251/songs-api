# Songs API

This is the backend API for the Songs App, a music application that provides endpoints for song data and user interactions.

## Major Libraries and Frameworks

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for Node.js, used to build the API.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
- **TypeScript**: Enhances JavaScript with static types.
- **Swagger**: API documentation tool for generating interactive API documentation.
- **ESLint**: Linting tool to identify and fix problems in JavaScript/TypeScript code.
- **Prettier**: Code formatter to ensure consistent code style.
- **Jest**: Testing framework for running unit tests.

## Deployment

The API is deployed using Docker on Render.

## Related Projects

- **Frontend Repository**: [songs-app-frontend](https://github.com/zmekonnen251/songs-app-frontend)

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/song-api.git
   Install Dependencies:
   ```
2. **Install Dependencies**:
   ```bash
   cd song-api
   yarn install
   ```
3. **Create Environment File**:
   Create a `.env` file based on `.env.example` and configure your environment variables.
   ```bash
   cp .env.example .env
   ```
4. **Run the Application**:

   - **Development Mode**:
     ```bash
     yarn dev
     ```
   - **Build the Application**:
     ```bash
     yarn build
     ```
   - **Start the Application**:
     ```bash
     yarn start
     ```

5. **Linting**:
   To check code quality and fix issues, run:
   ```bash
   yarn lint
   ```
6. **Testing**:
   To run the tests, use:
   ```bash
   yarn test
   ```
7. **Swagger Documentation**:
   Access the API documentation at `/docs` once the server is running. Swagger UI provides interactive documentation for the API endpoints.

## Scripts

- `yarn dev`: Runs the application in development mode with live reloading.
- `yarn build`: Compiles TypeScript files into JavaScript using the production configuration.
- `yarn start`: Starts the application in production mode.
- `yarn lint`: Lints and fixes code issues using ESLint.
- `yarn test`: Runs unit tests using Jest.
- `yarn format`: Formats code using Prettier.
- `yarn clean`: Removes the `dist` directory.

## Basic API Documentation

### Routes

- `GET /api/songs`: Retrieves a list of all songs.
- `GET /api/songs/:id`: Retrieves a single song by ID.
- `POST /api/songs`: Creates a new song.
- `PUT /api/songs/:id`: Updates a song by ID.
- `DELETE /api/songs/:id`: Deletes a song by ID.

### Models

#### Song

```json
{
  "id": "string",
  "title": "string",
  "artist": "string",
  "album": "string",
  "genre": "string"
}
```

## GitHub Actions

GitHub Actions are set up for linting and testing. The workflow runs automatically on push and pull request events. For more details, check the `.github/workflows/lint-and-test.yml` file.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Swagger](https://swagger.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)
- [Render](https://render.com/)
- [Docker](https://www.docker.com/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [ISC License](https://opensource.org/licenses/ISC)

## Author

Zelalem Mekonnen - [GitHub](https://github.com/zmekonnen251) - [LinkedIn](https://www.linkedin.com/in/zelalem-mekonnen-0b2b3b1b0/)

## Support

If you find this project helpful, please give it a star. Thanks!
