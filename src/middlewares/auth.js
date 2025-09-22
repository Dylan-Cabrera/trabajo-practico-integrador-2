import { decodeToken } from "../helpers/jwt.helper.js";

export const auth = async (req,res,next) => {
    try {
        const token = req.cookies["token"];

        const decoded = decodeToken(token);
        if(!decoded) {
            return res.status(401).json({
                msg: "No autenticado"
            })
        };

        req.user = decoded

        next();
    } catch (error) {
        console.log(error)
    }
}