import express from "express";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  middlewares() {
    // directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/api", (req, res) => {
      res.send("Hola Mundo");
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server run on port ${this.port}`);
    });
  }
}

export default Server;
