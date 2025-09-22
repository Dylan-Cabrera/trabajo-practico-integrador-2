import { compare } from "bcrypt";
import { comparePassword, hash } from "../helpers/bcrypt.helper.js";
import { UserModel } from "../models/user.model.js";
import { newToken } from "../helpers/jwt.helper.js";


export const register  = async (req,res) => {
    console.log(req.body);
    const { username, email, password, role, profile } = req.body;
    try {
        const hashedPassword = await hash(password);

        const newUser = await UserModel.create({
            username: username,
            email: email,
            role: role,
            password: hashedPassword,
            profile: profile
        });

        res.status(201).json({
            msg: "usuario creado correctamente",
            data: newUser
        });
        
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const login  = async (req,res) => {
    const { username, password } = req.body;
    try {
        const user = await UserModel.findOne({
            username: username
        });
        
        const verifyPassword = await comparePassword(password, user.password);
        if(!verifyPassword) {
            return res.status(401).json({
                msg: "Credencailes incorrectas"
            })
        };

        const token = newToken(user);

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000*60*60
        });

        res.status(200).json({
            msg: "usuario loggeado correctamente"
        });

    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const logout  = async (req,res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({
            msg: "Logout exitoso"
        })
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const getProfile  = async (req,res) => {
    try {
        const user = await UserModel.findOne({_id: req.user.id});

        res.status(200).json(user.profile)
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

// export const updateProfile  = async (req,res) => {
//     const {profile} = req.body
//     try {
//         const user = UserModel.updateOne(
//             {_id: req.user.id},
//             {profile: profile});

//         res.status(200).json({
//             msg: "Perfil actualizado con exito"
//         })
//     } catch (error) {
//         res.status(500).json({
//             msg: "Error interno del servidor"
//         });
//         console.log(error);
//     }
// };

