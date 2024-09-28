import config from 'config';
import { connect as mongooseConnect, connection } from 'mongoose';

const dbConfig = config.get<string>('database.db_url');

export const connect = async (): Promise<void> => {
    try {
      await mongooseConnect(dbConfig);
      console.log('====================================');
      console.log('Database connected');
      console.log('====================================');  
    } catch (error) {
        console.log('====================================');
        console.log('Database connection failed');
        console.log('====================================');
        process.exit(1);
    }
    
};

//export const close = (): Promise<void> => connection.close();
