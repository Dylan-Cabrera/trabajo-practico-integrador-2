import { Router } from "express";
import { createTag, deleteTag, getAllTags, getTagById, updateTag } from "../controllers/tag.controller.js";
import { auth } from "../middlewares/auth.js";
import { admin } from "../middlewares/admin.js";
import { validator } from "../middlewares/validator.js";
import { createTagValidations, deleteTagValidator, getTagValidator, updateTagValidations } from "../middlewares/validations/tag.validations.js";


export const tagRoutes = Router();

tagRoutes.use(auth);

tagRoutes.post('/tags', admin, createTagValidations, validator, createTag);
tagRoutes.get('/tags', getAllTags);
tagRoutes.get('/tags/:id', getTagValidator, validator, getTagById);
tagRoutes.put('/tags/:id', admin, updateTagValidations, validator, updateTag);
tagRoutes.delete('/tags/:id', admin, deleteTagValidator, validator, deleteTag);