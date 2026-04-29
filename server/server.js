import express from 'express';
import cors from 'cors';
import indexrouter from '../router/index.routes.js';
import* as db from '../db/cnn_mongodb.js';
    
export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.generalRouter = '/api';
    
    this.middlewares();
    this.routes();
  }

  async conectarDBmongo() {
    if(!db.isConnected) {
      await db.connectToMongoDB();
    }
  }

  middlewares() {
    this.app.use((req, res, next) => {
      console.log(`Solicitud: ${req.method} ${req.url}`);
      next();
    });
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.static('public'));
  }

  routes() {
    console.log('Registrando rutas...');
    console.log('Router base:', this.generalRouter);
    
    // Ruta de prueba directa
    this.app.get('/test', (req, res) => {
      res.json({ msg: 'Ruta de prueba funcionando' });
    });
    
    this.app.use(this.generalRouter, indexrouter);
    console.log('Rutas registradas');
    
    this.app.use((req, res) => {
      res.status(404).json({
        msg: 'Ruta no encontrada'
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto`, this.port);
    });
  }
}