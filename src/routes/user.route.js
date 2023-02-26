import express from "express";
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getQtyUsers,
} from "../controllers/user.controller.js";
import { validateDataUpdateUser } from "../validations/user.validations.js";
/* para Ruta Protegida
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js"
*/
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/count/count", getQtyUsers);

// RUTAS PROTEGIDAS
/* 
router.get("/", verifyAdmin, getUsers);
router.get("/:id", verifyUser, getUser);
router.patch("/:id", verifyUser, validateDataUpdateUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
*/

export default router;
