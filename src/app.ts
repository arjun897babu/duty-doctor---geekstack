import DB from './config/db-config'
DB();
import App from "./config/app-config";
import { serverConfig } from './constant/env-variables';
App.listen(serverConfig.server.port, () => {
    console.log(`server listening to the port http://localhost:${serverConfig.server.port}`)
})