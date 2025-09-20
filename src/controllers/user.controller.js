import { UserModel } from "../models/user.model.js";

export const getAllUsers = async (req,res) => {
    try {
        const users = await UserModel.find().populate("article");

        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const getUserById = async (req,res) => {
    try {
        const user = await UserModel.findById(req.params.id).populate("article comment");

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};


export const updateUser = async (req,res) => {
    try {
        const updateUser = await UserModel.findByIdAndUpdate(
            req.params.id,
            req,body,
            {new: true}
        );

        res.status(200).json({
            msg: "usuario actualizado correctamente",
            data: updateUser
        });

    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const deleteUser = async (req,res) => {
    try {
        await UserModel.findByIdAndDelete(req.params.id);

        res.status(200).json({
            msg: "usuario eliminado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};