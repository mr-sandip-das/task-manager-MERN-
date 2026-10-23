import express from "express";
import cors from "cors";
import router from "./route/userRoute.js";
const app=express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use("/user",router);


export default app;