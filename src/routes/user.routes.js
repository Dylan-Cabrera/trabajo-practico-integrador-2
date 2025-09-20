import { Router } from "express";
import { deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controller.js";


export const userRoutes = Router();

userRoutes.get('/users', getAllUsers);
userRoutes.get('/users/:id', getUserById);
userRoutes.put('/users/:id', updateUser);
userRoutes.delete('/users/:id', deleteUser);
