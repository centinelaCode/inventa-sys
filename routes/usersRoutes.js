import { Router } from "express";
const router = Router();
import { usersRegistro } from "../controllers/usersController.js";

// routes
router.post("/", usersRegistro);

export default router;
