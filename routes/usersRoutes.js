import { Router } from "express";
const router = Router();
import { usersRegistro } from "../controllers/usersController.js";

// routes
router.get("/", usersRegistro);

export default router;
