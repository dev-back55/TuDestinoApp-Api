import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import productRoute from "./routes/product.route.js";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import paymentRoute from "./routes/payment.route.js"
import dotenv from "dotenv"
import mercadopago from "mercadopago";

dotenv.config();

const app = express();

//mercadopago.configure({access_token: process.env.MERCADOPAGO_KEY})
//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//Routes
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/payment",paymentRoute);

export default app;
