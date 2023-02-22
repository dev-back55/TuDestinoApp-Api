import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import productRoute from "./routes/product.route.js";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//Routes
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

export default app;
