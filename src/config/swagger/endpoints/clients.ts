const clientsSwagger: object = {
    '/clients': {
      'x-swagger-router-controller': 'main-controller',
      get: {
        tags: ['clients'],
        operationId: 'clientsGet',
        description: 'Get clients',
        parameters: [
          {
            name: 'limit',
            in: 'query',
            description: 'Limit',
            type: 'string',
            example: 5
          },
          {
            name: 'offset',
            in: 'query',
            description: 'Offset',
            type: 'string',
            example: 1
          },
        ],
        responses: {
          '200': {
            description: 'Success',
            schema: {
              $ref: '#definitions/Clients',
            },
          },
          '400': {
            description: 'Bad request',
            schema: {
              $ref: '#/definitions/BadRequest',
            },
          },
        },
      },
      post: {
        tags: ['clients'],
        operationId: 'clientsPost',
        description: 'Create client',
        parameters: [
            {
              name: 'create-client',
              in: 'body',
              description: '',
              schema: {
                $ref: '#/definitions/CreateClientSchema',
              },
            },
          ],
        responses: {
          '201': {
            description: 'Created',
            schema: {
              $ref: '#definitions/Clients',
            },
          },
          '400': {
            description: 'Bad request',
            schema: {
              $ref: '#/definitions/BadRequest',
            },
          },
        },
      },
    },
    '/clients/average-ages': {
        'x-swagger-router-controller': 'main-controller',
        get: {
          tags: ['clients'],
          operationId: 'clientsAverageAgesGet',
          description: 'Get clients average ages',
          responses: {
            '200': {
              description: 'Success',
            },
            '400': {
              description: 'Bad request',
              schema: {
                $ref: '#/definitions/BadRequest',
              },
            },
          },
        },
      },
  };
  
  module.exports = {
    ...clientsSwagger,
  };
  