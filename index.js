
import Server from './server/server.js';
import Colors  from 'colors';
import dotenv from 'dotenv';
dotenv.config();
const server = new Server();
await server.listen();
console.log('¡Hola Mundo!');