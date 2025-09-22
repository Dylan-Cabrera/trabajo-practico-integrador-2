import { Router } from "express";
import { deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.js";
import { admin } from "../middlewares/admin.js";


export const userRoutes = Router();

userRoutes.use(auth);
userRoutes.use(admin)

userRoutes.get('/users', getAllUsers);
userRoutes.get('/users/:id', getUserById);
userRoutes.put('/users/:id', updateUser);
userRoutes.delete('/users/:id', deleteUser);
