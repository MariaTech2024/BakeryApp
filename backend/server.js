import express from "express";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import dotenv from "dotenv";


dotenv.config();

const app = express();
const port = 4000;

/// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.get("/api/hello", (req, res) => {
    res.send({ message: "Hello from the backend!" });
  });

//middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",  
  methods: 'GET, POST',            
  credentials: true                 
}));

//db connection
connectDB();

//API endpoint

app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);



app.get("/", (req,res)=>{
    res.send("Server is working!")
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

