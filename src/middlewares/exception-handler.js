import { Exception } from "../exception/exception.js"

export default (err, req, res, next) => {
    if(err instanceof Exception) {
       return res.status(err.status).json({
            message: err.message,
            status: err.status
        })
    }

    res.status(500).json({
        message: "Internal server error",
        status: 500
    })
}