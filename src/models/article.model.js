import { model, Schema, Types} from "mongoose";
import { type } from "os";

const articleSchema = new Schema({
    title: {
        type: String,
        minLength: [3, "El título debe tener al menos 3 carácteres"],
        maxLength: [200, "El título no puede tener más de 200 carácteres"],
        require: true
    },
    content: {
        type: String,
        minLength: [3, "El contenido debe tener al menos 50 carácteres"],
        require: true
    },
    excerpt: {
        type: String,
        maxLength: [200, "El excerpt no puede tener más de 500 carácteres"]
    },
    status: {
        type: String,
        enum: ["published", "archived"],
        default: "published"
    },
    author: {
        type: Types.ObjectId,
        ref: "user"
    },
    tags: [
        {
            type: Types.ObjectId,
            ref: "tag"
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
});

export const ArticleModel = model("article", articleSchema);