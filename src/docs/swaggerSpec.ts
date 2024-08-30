import path from 'path';
import dotenv from 'dotenv';

import swaggerJSDoc, { SwaggerDefinition } from 'swagger-jsdoc';
import { SwaggerOptions } from 'swagger-ui-express';

dotenv.config();
const apis =
  process.env.NODE_ENV === 'production'
    ? [
        path.join(__dirname, '../../dist/routes/*.js'),
        path.join(__dirname, '../../dist/models/*.js'),
      ]
    : [
        path.join(__dirname, '../routes/*.ts'),
        path.join(__dirname, '../models/*.ts'),
      ];
const SwaggerDefinition: SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Songs API',
    version: '1.0.0',
    description: 'API documentation for the Songs App',
  },
  servers: [
    {
      url: process.env.API_BASE_URL || 'http://localhost:3000',
      description: 'API server',
    },
  ],
};

const options: SwaggerOptions = {
  definition: SwaggerDefinition,
  apis,
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
