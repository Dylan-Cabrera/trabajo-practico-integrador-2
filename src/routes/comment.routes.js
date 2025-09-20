import { Router } from "express";
import { createComment, deleteComment, getAllComments, getCommentsAricle, getMyComments, updateComment } from "../controllers/comment.controller.js";

export const commentRoutes = Router();

commentRoutes.post('/comments', createComment);
commentRoutes.get('/comments', getAllComments);
commentRoutes.get('/comments/article/:articleID', getCommentsAricle);
commentRoutes.get('/comments/my', getMyComments);
commentRoutes.put('/comments/:id', updateComment);
commentRoutes.delete('/comments/:id', deleteComment);