import { DataSource } from 'typeorm';
import { Ride } from './entities/Ride';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: './database.sqlite', // Caminho do arquivo do banco SQLite
    entities: [Ride], // Registro da entidade Ride
    synchronize: true, // Sincroniza o modelo com o banco de dados
});

AppDataSource.initialize()
    .then(() => {
        console.log('📦 Banco de dados conectado com sucesso');
    })
    .catch((error) => {
        console.error('❌ Erro ao conectar ao banco de dados:', error);
    });
