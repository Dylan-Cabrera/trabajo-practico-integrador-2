import { Router } from "express";
import { createArticleTag, deleteArticleTag } from "../controllers/article_tags.controller.js";
import { auth } from "../middlewares/auth.js";


export const articleTagRoutes = Router();

articleTagRoutes.use(auth);

articleTagRoutes.post('/articles/:articleId/tags/:tagId', createArticleTag);
articleTagRoutes.delete('/articles/:articleId/tags/:tagId', deleteArticleTag);