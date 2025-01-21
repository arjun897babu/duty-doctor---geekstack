import DB from './config/db-config'
DB();
import App from "./config/app-config";
App.listen(8080, () => {
    console.log(`server listening to the port`)
})