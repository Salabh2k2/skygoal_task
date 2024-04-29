import { Router } from "express";
const router = Router();

import userController from "../controllers/user.js";
const { login, register, dashboard, getAllUsers } = userController;
import authMiddleware from '../middleware/auth.js';

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/users").get(getAllUsers);


export default router;