import express from "express";
import "dotenv/config";
import cors from "cors";
import postRoutes from "./modules/post/post.route.js";
import cookieParser from "cookie-parser";
import authRoutes from "./modules/auth/auth.route.js";
import categoryRoutes from "./modules/category/category.route.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/auth", authRoutes);

export default app;
