import { model, Schema } from "mongoose";


const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        minLength: [3, "EL username debe tener al menos 3 carácteres"],
        maxLength: [20, "EL username no puede tener más de 20 carácteres"],
        require: true
    },
    email: {
        type: String,
        unique: true,
        match: /.+\@.+\..+/ ,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    profile: {
        firstName: {
            type: String,
            minLength: [3, "EL nombre debe tener al menos 3 carácteres"],
            maxLength: [20, "EL nombre no puede tener más de 20 carácteres"],
            require: true
        },
        lastName: {
            type: String,
            minLength: [3, "EL apellido debe tener al menos 3 carácteres"],
            maxLength: [20, "EL apellido no puede tener más de 20 carácteres"],
            require: true
        },
        biography: {
            type: String,
            maxLength: [500, "La biografia no puede tener más de 500 carácteres"]
        },
        avatarUrl: {
            type: String,
            match: [/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i, "URL invalida" ]
        },
        birthDate: {
            type: Date
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
});

export const UserModel = model("user", UserSchema);