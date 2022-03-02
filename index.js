import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.send("Hola mundo con express!!");
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
