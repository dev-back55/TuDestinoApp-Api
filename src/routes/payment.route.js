import express from "express";
import {
  createPayment,
  getAllPayment,
  getPaymentId
} from "../controllers/payment.controller.js";





const router = express.Router();


router.get("/",getAllPayment);
router.post("/",createPayment);
router.get("/:id",getPaymentId);

export default router;

