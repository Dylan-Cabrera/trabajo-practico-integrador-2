import { Router } from "express";
import { login, logout, getProfile, register } from "../controllers/auth.controller.js";


export const authRoutes = Router();

authRoutes.post('/auth/register', register);
authRoutes.post('/auth/login', login);
authRoutes.post('/auth/logout', logout);
authRoutes.get('/auth/profile', getProfile);
//authRoutes.put('/auth/profile', updateProfile);
authRoutes.post('/auth/logout', logout);