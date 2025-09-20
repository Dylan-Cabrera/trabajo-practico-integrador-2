import { ArticleModel } from "../models/article.model.js";

export const createArticleTag = async (req,res) => {
    const {articleId , tagId} = req.params;
    try {
        await ArticleModel.findByIdAndUpdate(articleId, {
            $push: {tags: tagId}
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
    const {articleId , tagId} = req.params;
    try {
        await ArticleModel.findByIdAndDelete(articleId, {
            $ull: {tags: tagId}
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