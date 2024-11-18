import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mariavolzhina:01813@cluster0.ysgfb.mongodb.net/?').then(()=>console.log("DB connected"));
}