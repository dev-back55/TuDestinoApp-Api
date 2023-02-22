import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import {
  validateDataLoginUser,
  validateDataRegisterUser,
} from "../validations/auth.validations.js";

const router = express.Router();

router.post("/register", validateDataRegisterUser, register);
router.post("/login", validateDataLoginUser, login);

export default router;
