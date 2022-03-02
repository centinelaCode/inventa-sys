import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.send("Hola mundo con express!!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server run on port ${process.env.PORT}`);
});
