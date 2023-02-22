import { check } from "express-validator";
import validateResult from "../middlewares/validator.middleware.js";

export const validateDataRegisterUser = [
  check("username").exists().notEmpty().isString(),
  check("email").exists().notEmpty().isString(),
  check("password").exists().notEmpty().isString(),
  check("country").exists().notEmpty().isString(),
  check("city").exists().notEmpty().isString(),
  check("phone").exists().notEmpty().isString(),
  (req, resp, next) => validateResult(req, resp, next),
];

export const validateDataLoginUser = [
  check("username").exists().notEmpty().isString(),
  check("password").exists().notEmpty().isString(),
  (req, resp, next) => validateResult(req, resp, next),
];
