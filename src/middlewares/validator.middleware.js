import { validationResult } from "express-validator";

const validateResult = (req, resp, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    resp.status(403).json({ message: error.array() });
  }
};

export default validateResult;
