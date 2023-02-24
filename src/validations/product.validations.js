import { check } from "express-validator";
import validateResult from "../middlewares/validator.middleware.js";

export const validateDataUpdateProduct = [
  check("title").optional().exists().notEmpty().isString(),
  check("country").optional().exists().notEmpty().isString(),
  check("city").optional().exists().notEmpty().isString(),
  check("address").optional().exists().notEmpty().isString(),
  check("image").optional().exists().notEmpty().isString(),
  check("unAvailable").optional().exists().notEmpty().isString(),
  check("description").optional().exists().notEmpty().isString(),
  check("image").optional().exists().notEmpty().isString(),
  check("description").optional().exists().notEmpty().isString(),
  check("maxPeople").optional().exists().notEmpty().isNumeric(),
  check("price").optional().exists().notEmpty().isNumeric(),
  check("numberBedrom").optional().exists().notEmpty().isNumeric(),
  check("numberBathroom").optional().exists().notEmpty().isNumeric(),
  check("productType").optional().exists().notEmpty().isString(),
  check("gym").optional().exists().notEmpty().isBoolean(),
  check("swimmingPool").optional().exists().notEmpty().isBoolean(),
  (req, resp, next) => validateResult(req, resp, next),
];

export const validateDataCreateProduct = [
  check("title").exists().notEmpty().isString(),
  check("country").exists().notEmpty().isString(),
  check("city").exists().notEmpty().isString(),
  check("address").exists().notEmpty().isString(),
  check("image").exists().notEmpty().isString(),
  check("unAvailable").exists().notEmpty().isString(),
  check("description").exists().notEmpty().isString(),
  check("image").exists().notEmpty().isString(),
  check("description").exists().notEmpty().isString(),
  check("maxPeople").exists().notEmpty().isNumeric(),
  check("price").exists().notEmpty().isNumeric(),
  check("numberBedrom").exists().notEmpty().isNumeric(),
  check("numberBathroom").exists().notEmpty().isNumeric(),
  check("productType").exists().notEmpty().isString(),
  check("gym").exists().notEmpty().isBoolean(),
  check("swimmingPool").exists().notEmpty().isBoolean(),
  (req, resp, next) => validateResult(req, resp, next),
];
