import ejemploRouter from './ejemplo.routers.js';
import usuarioRouter from './usuario.routers.js';
import { Router } from 'express';

const indexrouter = Router();

indexrouter.use('/ejemplo', ejemploRouter);
indexrouter.use('/usuarios', usuarioRouter);

export default indexrouter;