import { UserModel } from "../models/user.model.js";


export const register  = async (req,res) => {
    const { username, email, password, profile } = req.body;
    try {

        const newUser = await UserModel.create({
            username: username,
            email: email,
            password: password,   //hashear contraseña
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
        //verificar contraseña
        //crear token
        //mandar token a las cookies
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

