import express from "express";
import "dotenv/config";
import cors from "cors";
import { StartDB } from "./src/config/database.js";
import { router } from "./src/routes/index.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT;

StartDB();
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use("/api", router);

app.listen(PORT, ()=> {
    console.log(`Escuchando servidor en el puerto ${PORT}`)
});

