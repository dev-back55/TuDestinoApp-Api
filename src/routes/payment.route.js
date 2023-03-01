import express from "express";
import {
  createPayment,
  getAllPayment,
  getPaymentId,
  getQtyPayment,
  getTotalPayment,
  buscarReservasPorFechaDeHoy,
  savePayment,
  getPaymentDate,
  getPaymentLastWeek,
} from "../controllers/payment.controller.js";
import { verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/",verifyUser, getAllPayment);
router.post("/",verifyUser, createPayment);
router.post("/save", verifyUser, savePayment);
router.get("/:id",verifyUser, getPaymentId);
router.get("/totalhoy", getPaymentDate);
router.get("/semanatotal", getPaymentLastWeek);  
router.get("/reservas/hoy", buscarReservasPorFechaDeHoy)
router.get("/count/count", getQtyPayment);
router.get("/sum/totalpayment", getTotalPayment);

export default router;

