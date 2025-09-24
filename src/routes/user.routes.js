import { Router } from "express";
import { deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.js";
import { admin } from "../middlewares/admin.js";
import { validator } from "../middlewares/validator.js";
import { deleteUserValidations, getUserValidation, updateUserValidations } from "../middlewares/validations/userAuth.validations.js";


export const userRoutes = Router();

userRoutes.use(auth);

userRoutes.get('/users', admin, getAllUsers);
userRoutes.get('/users/:id', admin, getUserValidation, validator, getUserById);
userRoutes.put('/users/:id', admin, updateUserValidations, validator,  updateUser);
userRoutes.delete('/users/:id', admin, deleteUserValidations, validator, deleteUser);
