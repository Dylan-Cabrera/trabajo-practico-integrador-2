import { Router } from "express";
import { createArticleTag, deleteArticleTag } from "../controllers/article_tags.controller.js";
import { auth } from "../middlewares/auth.js";
import { articleAdminOwner } from "../middlewares/ownerAdmin.js";


export const articleTagRoutes = Router();

articleTagRoutes.use(auth);

articleTagRoutes.post('/articles/:articleId/tags/:tagId', articleAdminOwner, createArticleTag);
articleTagRoutes.delete('/articles/:articleId/tags/:tagId', articleAdminOwner, deleteArticleTag);