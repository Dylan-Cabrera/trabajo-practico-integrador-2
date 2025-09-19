import mongoose from "mongoose";
import { UserModel } from "../models/user.model.js";

export const StartDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Conectado a la base de datos correctamente")
        mongoose.connection.dropDatabase();
    } catch (error) {
        console.log("Error al conectar con la base de datos, Error: " + error);
        process.exit(1);
    }
}