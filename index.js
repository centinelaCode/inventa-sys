import dotenv from "dotenv";
dotenv.config();

import Server from "./models/Server.js";

// Hacemos la instancia del Server
const server = new Server();

// Ejecutamos el metodo listen
server.listen();
