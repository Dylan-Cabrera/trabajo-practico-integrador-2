import { ArticleModel } from "../models/article.model"
import { CommentModel } from "../models/comment.model";


export const articleAdminOwner = async (req,res,next) => {
    try {
        const article = await ArticleModel.findById(req.params.id || req.params.articleId);

        if(!article) {
            return res.status(404).json({
                msg: "Article no encontrado"
            })
        };

        if(req.user.id !== article.author && req.user.role !== "admin") {
            return res.status(403).json({
                msg: "No autorizado para esta accion"
            })
        };

        next();
    } catch (error) {
        console.log(error)
    }
}

export const commentAdminOwner = async (req,res,next) => {
    try {
        const comment = await CommentModel.findById(req.params.id || req.params.commentId);

        if(!comment) {
            return res.status(404).json({
                msg: "Comment no encontrado"
            })
        };

        if(req.user.id !== comment.author && req.user.role !== "admin") {
            return res.status(403).json({
                msg: "No autorizado para esta accion"
            })
        };

        next();
    } catch (error) {
        console.log(error)
    }
}