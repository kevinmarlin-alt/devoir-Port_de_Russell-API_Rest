const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Port de Russell',
      version: '1.0.0',
      description: 'Documentation de l\'API du Port de Russell pour la gestion des réservations de catways.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ]
  },
  
  apis: ['./routes/**/*.js', './models/*.js'], // chemins vers les routes et les modèles
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;