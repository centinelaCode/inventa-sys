import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "get API" });
});

export default router;
