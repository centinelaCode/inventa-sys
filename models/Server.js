import express from "express";

import usersRoutes from "../routes/usersRoutes.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersRoutePath = "/api/users";

    //Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  // metodos middlewares
  middlewares() {
    // directorio publico
    this.app.use(express.static("public"));
  }

  // metodo para las routes de la aplicación
  routes() {
    this.app.use(this.usersRoutePath, usersRoutes);
  }

  // metodo listen
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server run on port ${this.port}`);
    });
  }
}

export default Server;
