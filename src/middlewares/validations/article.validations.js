import {param, body} from "express-validator";
import { ArticleModel } from "../../models/article.model.js";

export const getTitleValidations = [
    param("id").custom( async (value) => {
            const article = await ArticleModel.findById(value)
            if(!article) {
                throw new Error("Article no encontrado")
            }
        })
        .isMongoId().withMessage("Id invalido")
]

export const createArticleValidations = [
    body("title").notEmpty()
    .isLength(2,200)
    ,
    body("content").notEmpty()
    .isLength(0,50)
    ,
    body("excerpt").notEmpty()
    .optional()
    .isLength(0,500)
    ,
    body("status").notEmpty()
    .custom( async (value) => {
        const statusValid = ["published", "archived"]
        if(!statusValid.includes(value)) {
            throw new Error("Status invalido")
        }
    })
    .optional()
]

export const updateArticleValidations = [
    body("title").notEmpty()
    .isLength(2,200)
    .optional()
    ,
    body("content").notEmpty()
    .isLength(0,50)
    .optional()
    ,
    body("excerpt").notEmpty()
    .optional()
    .isLength(0,500)
    ,
    body("status").notEmpty()
    .custom( async (value) => {
        const statusValid = ["published", "archived"]
        if(!statusValid.includes(value)) {
            throw new Error("Status invalido")
        }
    })
    .optional()
]

export const deleteArticleValidations = [
     param("id").custom( async (value) => {
            const article = await ArticleModel.findById(value)
            if(!article) {
                throw new Error("Article no encontrado")
            }
        })
        .isMongoId().withMessage("Id invalido")
]