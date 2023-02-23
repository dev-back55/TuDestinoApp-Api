import express from "express";
import {
  createPayment,
  getAllPayment,
  getPaymentId,
  getQtyPayment,
  getTotalPayment
} from "../controllers/payment.controller.js";

const router = express.Router();

router.get("/",getAllPayment);
router.post("/",createPayment);
router.get("/:id",getPaymentId);
router.get("/count/count",getQtyPayment);
router.get("/sum/totalpayment", getTotalPayment)

export default router;

