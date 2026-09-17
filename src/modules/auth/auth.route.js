import express from "express";

import { register, login, logout } from "./auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

const authRoutes = router;
export default authRoutes;
