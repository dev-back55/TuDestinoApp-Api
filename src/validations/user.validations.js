import { check } from "express-validator";
import validateResult from "../middlewares/validator.middleware.js";

export const validateDataUpdateUser = [
  check("username").optional().exists().notEmpty().isString(),
  check("email").optional().exists().notEmpty().isString(),
  check("country").optional().exists().notEmpty().isString(),
  check("city").optional().exists().notEmpty().isString(),
  check("password").optional().exists().notEmpty().isString(),
  check("phone").optional().exists().notEmpty().isString(),
  check("age").optional().exists().notEmpty().isNumeric(),
  check("image").optional().exists().notEmpty().isString(),
  (req, resp, next) => validateResult(req, resp, next),
];
