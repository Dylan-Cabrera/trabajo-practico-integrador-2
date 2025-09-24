import {param, body} from "express-validator";
import { UserModel } from "../../models/user.model.js";

export const registerValidations = [
    body("username").notEmpty()
    .custom( async (value) => {
        const user = await UserModel.findOne({username: value});
        if(user) {
            throw new Error("Ya exite un usuario con ese nombre")
        }
    })
    .isAlphanumeric()
    ,
    body("email").isEmail()
    .custom( async (value) => {
        const user = await UserModel.findOne({email: value});
        if(user) {
            throw new Error("Ya exite un usuario con ese email")
        }
    })
    ,
    body("password").isStrongPassword()
    ,
    body("role").custom( async (value) => {
        const roles = ["user", "admin"];
        if(!roles.includes(value)) {
            throw new Error("Role invalido")
        }
    })
    .optional()
    ,
    body("profile.firstName").isLength(2,50)
    .isAlpha("es-ES") //solo letras, es-ES para que admita ñ y acentos
    ,
    body("profile.lastName").isLength(2,50)
    .isAlpha("es-ES")
]

export const loginValidations = [
     body("username").notEmpty()
    .custom( async (value) => {
        const user = await UserModel.findOne({username: value});
        if(!user) {
            throw new Error("Usuario no encontrado")
        }
    })
    .isAlphanumeric()
];

export const updateProfileValidations = [
    body("profile.firstName").isLength(2,50)
    .isAlpha("es-ES")
    .optional()
    ,
    body("profile.lastName").isLength(2,50)
    .isAlpha("es-ES")
    .optional()
    ,
    body("biography").isLength(0,500)
    .optional()
    ,
    body("avatarUrl").isURL()
    .optional()
]

export const updateUserValidations = [
    body("username").notEmpty()
    .custom( async (value) => {
        const user = await UserModel.findOne({username: value});
        console.log(user)
        if(user) {
            throw new Error("Ya exite un usuario con ese nombre")
        }
    })
    .optional()
    .isAlphanumeric()
    ,
    body("email").isEmail()
    .custom( async (value, {req}) => {
        const user = await UserModel.findOne({email:  value, _id: {$ne: req.user.id}});
        if(user) {
            throw new Error("Ya exite un usuario con ese email")
        }
    })
    .custom( async (value, {req}) => {
        const user = await UserModel.findOne({email:  value, _id: {$eq: req.user.id}});
        if(user) {
            throw new Error("Ya estas registrado con ese email")
        }
    })
    .optional()
    ,
    body("password").isStrongPassword()
    .optional()
    ,
    body("role").custom( async (value) => {
        const roles = ["user", "admin"];
        if(!roles.includes(value)) {
            throw new Error("Role invalido")
        }
    })
    .optional()
    ,
    param("id").custom( async (value) => {
        const user = await UserModel.findById(value)
        if(!user) {
            throw new Error("Usuario no encontrado")
        }
    })
    .optional()
    .isMongoId().withMessage("Id invalido")
]

export const deleteUserValidations = [
    param("id").custom( async (value) => {
        const user = await UserModel.findById(value)
        if(!user) {
            throw new Error("Usuario no encontrado")
        }
    })
    .isMongoId().withMessage("Id invalido")
]

export const getUserValidation = [
    param("id").custom( async (value) => {
        const user = await UserModel.findById(value)
        if(!user) {
            throw new Error("Usuario no encontrado")
        }
    })
    .isMongoId().withMessage("Id invalido")
]