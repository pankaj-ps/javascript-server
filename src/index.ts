import { config } from "./config1";
import Server from './Server';


let server = new Server(config);
server.bootstrap();
