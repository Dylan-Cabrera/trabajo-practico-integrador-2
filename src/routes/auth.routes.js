import { Router } from "express";
import { login, logout, getProfile, register } from "../controllers/auth.controller.js";
import { auth } from "../middlewares/auth.js";


export const authRoutes = Router();

authRoutes.post('/auth/register', register);
authRoutes.post('/auth/login', login);
authRoutes.post('/auth/logout', logout);
authRoutes.get('/auth/profile', auth, getProfile);
//authRoutes.put('/auth/profile',auth, updateProfile);
authRoutes.post('/auth/logout', auth, logout);