import { Router } from "express";
import { createArticle, deleteArticle, getAllArticles, getArticleById, getMyArticles, updateArticle } from "../controllers/article.controller.js";
import { auth } from "../middlewares/auth.js";

export const articleRoutes = Router();

articleRoutes.use(auth);

articleRoutes.post('/articles', createArticle);
articleRoutes.get('/articles', getAllArticles);
articleRoutes.get('/articles/:id', getArticleById);
articleRoutes.get('/articles/my', getMyArticles);
articleRoutes.put('/articles/:id', updateArticle);
articleRoutes.delete('/articles/:id', deleteArticle);