// express - mongodb connectivity file for schema imolementation
import mongoose from "mongoose";
const url = "mongodb://localhost:27017";
mongoose.connect(url);
console.log("Succesfully Connected to mongoDB database ....");
