import { connect } from 'mongoose';
import { serverConfig } from '../constant/env-variables';
import { exit } from 'process';
const dbConfig = async (): Promise<void> => {
    try {
        const dbConnection = await connect(serverConfig.database.uri);
        console.log(`db connected to ${dbConnection.connection.host}`)
    } catch (error) {
        console.log(error)
        exit(0);
    }
}


export default dbConfig