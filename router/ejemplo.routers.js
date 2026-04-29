import { Router } from 'express';
import { getallEjemplo, getEjemploById, createEjemplo, updateEjemplo, deleteEjemplo } from '../controllers/ejemplo.controllers.js';

const ejemploRouter = Router();

ejemploRouter.get('/', getallEjemplo);
ejemploRouter.get('/:id', getEjemploById);
ejemploRouter.post('/', createEjemplo);
ejemploRouter.put('/:id', updateEjemplo);
ejemploRouter.delete('/:id', deleteEjemplo);

export default ejemploRouter;