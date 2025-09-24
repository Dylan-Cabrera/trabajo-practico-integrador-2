import { Router } from "express";
import { createArticle, deleteArticle, getAllArticles, getArticleById, getMyArticles, updateArticle } from "../controllers/article.controller.js";
import { auth } from "../middlewares/auth.js";
import { articleAdminOwner } from "../middlewares/ownerAdmin.js";
import { createArticleValidations, deleteArticleValidations, getTitleValidations, updateArticleValidations } from "../middlewares/validations/article.validations.js";
import { validator } from "../middlewares/validator.js";

export const articleRoutes = Router();

articleRoutes.use(auth);

articleRoutes.post('/articles', createArticleValidations, validator, createArticle);
articleRoutes.get('/articles', getAllArticles);
articleRoutes.get('/articles/:id', getTitleValidations, validator, getArticleById);
articleRoutes.get('/articles/my', getMyArticles);
articleRoutes.put('/articles/:id', articleAdminOwner, updateArticleValidations, validator, updateArticle);
articleRoutes.delete('/articles/:id', articleAdminOwner, deleteArticleValidations, validator, deleteArticle);