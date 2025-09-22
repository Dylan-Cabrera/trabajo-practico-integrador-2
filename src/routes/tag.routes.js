import { Router } from "express";
import { createTag, deleteTag, getAllTags, getTagById, updateTag } from "../controllers/tag.controller.js";
import { auth } from "../middlewares/auth.js";
import { admin } from "../middlewares/admin.js";


export const tagRoutes = Router();

tagRoutes.use(auth);

tagRoutes.post('/tags', admin, createTag);
tagRoutes.get('/tags', getAllTags);
tagRoutes.get('/tags/:id', getTagById);
tagRoutes.put('/tags/:id', admin, updateTag);
tagRoutes.delete('/tags/:id', admin, deleteTag);