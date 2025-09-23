import { Router } from "express";
import { createComment, deleteComment, getAllComments, getCommentsAricle, getMyComments, updateComment } from "../controllers/comment.controller.js";
import { auth } from "../middlewares/auth.js";
import { commentAdminOwner } from "../middlewares/ownerAdmin.js";

export const commentRoutes = Router();

commentRoutes.use(auth);

commentRoutes.post('/comments', createComment);
commentRoutes.get('/comments', getAllComments);
commentRoutes.get('/comments/article/:articleID', getCommentsAricle);
commentRoutes.get('/comments/my', getMyComments);
commentRoutes.put('/comments/:id', commentAdminOwner, updateComment);
commentRoutes.delete('/comments/:id', commentAdminOwner, deleteComment);