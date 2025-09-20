import { Router } from "express";
import { createArticleTag, deleteArticleTag } from "../controllers/article_tags.controller.js";


export const articleTagRoutes = Router();

articleTagRoutes.post('/articles/:articleId/tags/:tagId', createArticleTag);
articleTagRoutes.delete('/articles/:articleId/tags/:tagId', deleteArticleTag);