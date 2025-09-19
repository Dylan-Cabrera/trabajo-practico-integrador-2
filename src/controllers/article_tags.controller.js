import { ArticleModel } from "../models/article.model";

export const createArticleTag = async (req,res) => {
    req.body(article, tag) = req.body;
    try {
        await ArticleModel.findByIdAndUpdate(article, {
            $push: {tags: tag}
        })

        res.status(200).json({
            msg: "Tag agregada correctamente"
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const deleteArticleTag = async (req,res) => {
    req.body(article, tag) = req.body;
    try {
        await ArticleModel.findByIdAndDelete(article, {
            $ull: {tags: tag}
        })

        res.status(200).json({
            msg: "Tag eliminada correctamente"
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};