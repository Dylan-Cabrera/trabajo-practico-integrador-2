import {param, body} from "express-validator";
import { TagModel } from "../../models/tag.model.js";

export const getTagValidator = [
    param("id")
        .isMongoId().withMessage("Id invalido")
        .custom( async (value) => {
               const tag = await TagModel.findById(value)
               if(!tag) {
                   throw new Error("Tag no encontrado")
               }
           })
]

export const createTagValidations = [
    body("name")
    .trim()
    .isLength(2,30)
    .custom( async (value) => {
        const tag = await TagModel.findOne({name: value})
        if(tag) {
            throw new Error("Ya existe un tag con ese nombre")
        }
    })
    ,
    body("description").optional()
    .isLength({max: 200})
]

export const updateTagValidations = [
    body("name")
    .trim()
    .isLength(2,30)
    .custom( async (value) => {
        const tag = await TagModel.findOne({name: value})
        if(tag) {
            throw new Error("Ya existe un tag con ese nombre")
        }
    })
    .optional()
    ,
    body("description").optional()
    .isLength({max: 200})
]

export const deleteTagValidator = [
    param("id")
        .isMongoId().withMessage("Id invalido")
        .custom( async (value) => {
               const tag = await TagModel.findById(value)
               if(!tag) {
                   throw new Error("Tag no encontrado")
               }
           })
]

