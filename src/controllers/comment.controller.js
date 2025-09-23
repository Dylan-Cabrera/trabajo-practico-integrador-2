import { ArticleModel } from "../models/article.model.js";
import { CommentModel } from "../models/comment.model.js";


export const getAllComments = async (req,res) => {
    try {
        const comments = await CommentModel.find();

        res.status(200).json(comments);

    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const getCommentsAricle = async (req,res) => {
    try {
        const article = await ArticleModel.findById(req.params.id).populate([
            {path: "comments", select: "-_id content"},
            {path: "author", select: "_-id -password"}]);

        res.status(200).json(article);

    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const getMyComments = async (req,res) => {
    try {
        const comments = await CommentModel.find({author: req.user.id}); //saca el id del token

        res.status(200).json(comments);

    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const createComment = async (req,res) => {
    const {content, article} = req.body;
    try {
        const newComment = await CommentModel.create({
            content: content,
            article: article,
            author: req.user.id
        }); 

        res.status(200).json({
            msg: "Comment creado correctamente",
            data: newComment
        });

    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const updateComment = async (req,res) => {
    try {
        const updateComment = await CommentModel.findByIdAndUpdate(
            req.params.id,
            req,body,
            {new: true}
        );

        res.status(200).json({
            msg: "Comment actualizado correctamente",
            data: updateComment
        });

    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const deleteComment = async (req,res) => {
    try {
        await CommentModel.findByIdAndDelete(req.params.id);

        res.status(200).json({
            msg: "Comentario eliminado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};