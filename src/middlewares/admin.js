

export const admin = (req,res,next) => {
    try {
        const user = req.user;

        if(user.role !== "admin") {
            res.status(403).json({
                msg: "No autorizado para esta accion"
            })
        };

        next();
    } catch (error) {
        console.log(error)
    }
};