import { Router } from 'express';
import { getallUsuario, getUsuarioById, createUsuario, updateUsuario, deleteUsuario } from '../controllers/usuario.controllers.js';

const usuarioRouter = Router();

usuarioRouter.get('/', getallUsuario);
usuarioRouter.get('/:id', getUsuarioById);
usuarioRouter.post('/', createUsuario);
usuarioRouter.put('/:id', updateUsuario);
usuarioRouter.delete('/:id', deleteUsuario);

export default usuarioRouter;