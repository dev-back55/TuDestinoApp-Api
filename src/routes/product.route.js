import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
  getProductType,
  updateProduct,
  getProductDashboard,
  searchProducts
} from "../controllers/product.controller.js";
import {validateDataUpdateProduct,validateDataCreateProduct} from '../validations/product.validations.js'
//import { verifyUser, verifyAdmin } from "../utils/verifyToken.js"


const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.get("/:id", getProductById);
router.get("/type/:Type", getProductType);
router.patch("/:id", updateProduct);
router.get("/all/dashboard", getProductDashboard);
router.get("/all/search", searchProducts);
//router.delete("/:id", deleteProduct);

/* RUTAS PROTEGIDAS
crear producto solo admin
router.post("/", verifyAdmin, createProduct);

cambiar update producto solo admin
router.patch("/:id", verifyAdmin, updateProduct);

borrar delete producto solo admin
router.delete("/:id", verifyAdmin, deleteProduct);
*/
export default router;
