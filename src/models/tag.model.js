import { model, Schema } from "mongoose";

const tagSchema = new Schema({
    name: {
        type: String,
        minLength: [2, "EL nombre debe tener al menos 3 carácteres"],
        maxLength: [30, "EL nombre no puede tener más de 20 carácteres"],
        require: true,
        unique: true
    },
    description: {
        type: String,
        maxLength: [200, "La descripción no puede tener más de 200 carácteres"],
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
},{
    versionKey: false,
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});

tagSchema.virtual("article", {
    ref: "article",
    localField: "_id",
    foreignField: "tags"
});
export const TagModel = model("tag", tagSchema);
