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
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/",verifyUser, getAllPayment);
router.post("/",verifyUser, createPayment);
router.post("/save", verifyUser, savePayment);
router.get("/:id",verifyUser, getPaymentId);
router.get("/totalhoy", verifyAdmin, getPaymentDate);
router.get("/semanatotal", verifyAdmin, getPaymentLastWeek);  
router.get("/reservas/hoy", verifyAdmin, buscarReservasPorFechaDeHoy)
router.get("/count/count", verifyAdmin, getQtyPayment);
router.get("/sum/totalpayment", verifyAdmin, getTotalPayment);

export default router;

