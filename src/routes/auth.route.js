import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import {
  validateDataLoginUser,
  validateDataRegisterUser,
} from "../validations/auth.validations.js";
//import { verifyUser, verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
