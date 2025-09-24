import {param, body} from "express-validator";
import { ArticleModel } from "../../models/article.model.js";

export const getCommentValidations = [
    
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
    
]

export const deleteCommentValidations = [
    
]