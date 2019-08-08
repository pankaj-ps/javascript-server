
import { config } from 'dotenv';
config();

const envVars: NodeJS.ProcessEnv = process.env;

const configuration = Object.freeze({

port : envVars.PORT,
secret_key : envVars.SECRET_KEY,
mongo_uri : envVars.MONGO_URL

}); 

//console.log("Config is :::::::::::", configuration);
export default configuration;