import { ArticleModel } from "../models/article.model.js";


export const getAllArticles = async (req,res) => {
    try {
        const articles = await ArticleModel.find();

        res.status(200).json(articles);

    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const getArticleById = async (req,res) => {
    try {
        const article = await ArticleModel.findById(req.params.id);

        res.status(200).json(article);

    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const getMyArticles = async (req,res) => {
    try {
        const articles = await ArticleModel.find({author: req.user.id}); //saca el id del token

        res.status(200).json(articles);

    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const createArticle = async (req,res) => {
    try {
        const newArticle = await ArticleModel.create(req.body);

        res.status(200).json({
            msg: "Article creado correctamente",
            data: newArticle
        });

    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const updateArticle= async (req,res) => {
    try {
        const updateArticle = await ArticleModel.findByIdAndUpdate(
            req.params.id,
            req,body,
            {new: true}
        );

        res.status(200).json({
            msg: "Ariticle actualizado correctamente",
            data: updateArticle
        });

    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const deleteArticle= async (req,res) => {
    try {
        await ArticleModel.findByIdAndDelete(req.params.id);

        res.status(200).json({
            msg: "Article eliminado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};