import { TagModel } from "../models/tag.model.js";


export const getAllTags = async (req,res) => {
    try {
        const tags = await TagModel.find();

        res.status(200).json(tags);

    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const getTagById = async (req,res) => {
    try {
        const tag = await TagModel.findById(req.params.id);

        res.status(200).json(tag);

    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const createTag = async (req,res) => {
    try {
        const newTag = await TagModel.create(req.body);

        res.status(200).json({
            msg: "tag creado correctamente",
            data: newTag
        });

    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const updateTag = async (req,res) => {
    try {
        const updateTag = await TagModel.findByIdAndUpdate(
            req.params.id,
            req,body,
            {new: true}
        );

        res.status(200).json({
            msg: "Tag actualizado correctamente",
            data: updateTag
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
        await TagModel.findByIdAndDelete(req.params.id);

        res.status(200).json({
            msg: "TAg eliminado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};