import { Router } from "express";
import { login, logout, getProfile, register, updateProfile } from "../controllers/auth.controller.js";
import { auth } from "../middlewares/auth.js";
import { validator } from "../middlewares/validator.js";
import { registerValidations } from "../middlewares/validations/userAuth.validations.js";

export const authRoutes = Router();

authRoutes.post('/auth/register', registerValidations, validator, register);
authRoutes.post('/auth/login', login);
authRoutes.post('/auth/logout', logout);
authRoutes.get('/auth/profile', auth, getProfile);
authRoutes.put('/auth/profile',auth, updateProfile);
authRoutes.post('/auth/logout', auth, logout);