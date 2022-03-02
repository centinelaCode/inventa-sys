import { response } from "express";

const usersRegistro = (req, res = response) => {
  res.json({ message: "get API - Controlador" });
};

export { usersRegistro };
