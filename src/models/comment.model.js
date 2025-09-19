import { model, Schema, Types } from "mongoose";

const commentSchema = new Schema({
    content: {
        type: String,
        minLength: [5, "El comentario debe tener al menos 5 carácteres"],
        maxLength: [500, "El comentario no puede tener más de 500 carácteres"],
        require: true
    },
    author: {
        type: Types.ObjectId,
        ref: "user"
    },
    article: {
        type: Types.ObjectId,
        ref: "article"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
})

export const CommentModel = model("comment", commentSchema);