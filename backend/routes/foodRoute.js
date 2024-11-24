import express from "express";
import { addFood, listFood, removeFood} from '../controllers/foodController.js';
import multer from "multer";
import path from "path";

// Create a writable directory for storing uploads
const foodRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
    // Use a writable directory like /tmp for environments like AWS Lambda or Vercel
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, '/tmp/uploads'); // Use /tmp on AWS Lambda or Vercel
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        // Use a timestamp to prevent filename conflicts
        return cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({storage: storage});

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;