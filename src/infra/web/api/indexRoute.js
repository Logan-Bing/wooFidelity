import fastify from "fastify";

export const server = fastify();

server.listen({port: 3000})