import mongoose from 'mongoose';

let isConnected = false;
const connectToMongoDB = async () => {
  if (isConnected) {
    console.log('Ya estamos conectados a MongoDB'.green);
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log('Conectado a MongoDB'.green);
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
};
 const db = mongoose.connection;
 db.on('error', (error) => {
   isConnected= false;
   console.log('Error en la conexión a MongoDB:', error);
 });
 db.once('open', () => {
    isConnected = true;
 })
 db.on('disconnected', () => {
   isConnected = false;
   console.log('Desconectado de MongoDB');
 })
 process.on('SIGINT', async () => {
   await mongoose.connection.close();
   console.log('Conexión a MongoDB cerrada por la aplicación');
   process.exit(0);
 });
export { connectToMongoDB, isConnected };