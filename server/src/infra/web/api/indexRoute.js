import fastify from "fastify";
import "dotenv/config"
import fastifySession from "@fastify/secure-session"
import cors from "@fastify/cors"

export const server = fastify();

server.register(fastifySession, {
    sessionName: "session",
    cookieName: "session-cookie",
    key: Buffer.from(process.env.SESSION_KEY, 'hex'),
})

server.register(cors, {
    origin: "http://localhost:5173",
    credentials: true,
})

server.listen({port: 3000})