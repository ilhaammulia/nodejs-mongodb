import mongoose from "mongoose";
import express from "express";
import productRouter from "./routes/ProductRouter.js";

mongoose.connect("mongodb://127.0.0.1:27017/roadmap-db");
const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
});

db.once("open", () => {
  console.log("Database Connected....");
});

const app = express();
app.use(express.json());
app.use("/products", productRouter);

app.listen(8888, () => {
  console.log("Server up and running...");
});
