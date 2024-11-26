import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import rideRoutes from './routes/rideRoutes';

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Rotas
app.use('/ride', rideRoutes);

// Porta de execução
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`🚀 Backend rodando na porta ${PORT}`);
});
