import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoutes from "./route/bookRoute.js";
import userRoute from "./route/userRoute.js";

const app = express();

app.use(cors());
app.use(express.json());


dotenv.config();

const PORT = process.env.PORT || 4000;


try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Connecting to mongoDB")
}    
catch(error ){ 
    console.log("Error:", error)
};

app.use("/book", bookRoutes);
app.use("/user", userRoute);

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`);
}); 