import jwt from "jsonwebtoken";

export const newToken = (user) => {
    try {
        return jwt.sign({
            id: user._id,
            role: user.role,
            firstName: user.profile.firstName,
            lastName: user.profile.lastName
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        });


    } catch (error) {
        console.log(error)
    }
};

export const decodeToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        console.log(error)
        console.log("Error en el decode")
    }
};