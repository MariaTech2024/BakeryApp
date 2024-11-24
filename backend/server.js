import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import dotenv from "dotenv";



dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//db connection
connectDB();

//middleware
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true, 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//API endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static(path.join(__dirname, '/tmp/uploads')));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

const port = process.env.PORT || 4000;

app.get("/", (req,res)=>{
    res.send("Server is working!")
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});