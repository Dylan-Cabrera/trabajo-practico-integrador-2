import Router from "express";
import { authRoutes } from "./auth.routes.js";
import { userRoutes } from "./user.routes.js";
import { tagRoutes } from "./tag.routes.js";
import { articleRoutes } from "./article.routes.js";
import { commentRoutes } from "./comment.routes.js";
import { articleTagRoutes } from "./articles_tags.routes.js";

export const router = Router(); 

router.use(authRoutes);
router.use(userRoutes);
router.use(tagRoutes);
router.use(articleRoutes);
router.use(commentRoutes);
router.use(articleTagRoutes);