import express from "express";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Routes
    this.routes();
  }

  routes() {
    this.app.use("/api", (req, res) => {
      res.send("Hola Mundo bofos");
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server run on port ${this.port}`);
    });
  }
}

export default Server;
