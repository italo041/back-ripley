"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequest = void 0;
exports.BadRequest = {
    type: 'object',
    properties: {
        statusCode: {
            type: 'number',
            example: 400,
        },
        error: {
            type: 'string',
            example: 'Bad Request',
        },
        message: {
            type: 'string',
            example: '...is required',
        },
    },
};
