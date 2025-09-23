import {param, body} from "express-validator";
import { UserModel } from "../../models/user.model.js";

export const registerValidations = [
    body("username").notEmpty()
    .custom( async (value) => {
        const user = await UserModel.findOne({username: value});
        if(user) {
            throw new Error({
                msg: "Ya exite un usuario con ese nombre",
                ok: false //probar cuando vuelva el wifi
            })
        }
    })
    .isAlphanumeric()
    ,
    body("email").isEmail()
    .custom( async (value) => {
        const user = await UserModel.findOne({email: value});
        if(user) {
            throw new Error({
                msg: "Ya exite un usuario con ese email",
                ok: false //probar cuando vuelva el wifi
            })
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