import express from "express";
import {
  createPayment,
  getAllPayment,
  getPaymentId,
  getQtyPayment,
  getTotalPayment,
  buscarReservasPorFechaDeHoy
} from "../controllers/payment.controller.js";

const router = express.Router();

router.get("/",getAllPayment);
router.post("/",createPayment);
router.get("/:id",getPaymentId);
router.get("/reservas/hoy", buscarReservasPorFechaDeHoy)
router.get("/count/count",getQtyPayment);
router.get("/sum/totalpayment", getTotalPayment)

export default router;

