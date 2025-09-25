import {param, body} from "express-validator";
import { ArticleModel } from "../../models/article.model.js";
import { CommentModel } from "../../models/comment.model.js";

export const getCommentValidations = [
    param("articleID").custom( async (value) => {
            const article = await ArticleModel.findById(value)
            if(!article) {
                throw new Error("Article no encontrado")
            }
        })
        .isMongoId().withMessage("Id invalido")
]

export const createCommentValidations = [
    body("content").notEmpty()
    .isLength(5,500)
    ,
    body("article").isMongoId()
    .custom( async (value)=> {
        const article = await ArticleModel.findById(value)

        if(!article) {
            throw new Error("articulo no encontrado")
        }
    })
]

export const updateCommentValidations = [
    body("content").notEmpty()
    .isLength(5,500)
    ,
    body("article").isMongoId()
    .custom( async (value)=> {
        const article = await ArticleModel.findById(value)

        if(!article) {
            throw new Error("articulo no encontrado")
        }
    })
]

export const deleteCommentValidations = [
    param("id").custom( async (value) => {
            const comment = await CommentModel.findById(value)
            if(!comment) {
                throw new Error("Comment no encontrado")
            }
        })
        .isMongoId().withMessage("Id invalido")
]