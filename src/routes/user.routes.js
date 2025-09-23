import { Router } from "express";
import { deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.js";
import { admin } from "../middlewares/admin.js";


export const userRoutes = Router();

userRoutes.use(auth);

userRoutes.get('/users', admin, getAllUsers);
userRoutes.get('/users/:id', admin, getUserById);
userRoutes.put('/users/:id', admin,  updateUser);
userRoutes.delete('/users/:id', admin, deleteUser);
