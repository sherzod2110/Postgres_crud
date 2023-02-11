import { Exception } from "../exception/exception.js";

export default schema => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);

    if(error) {
        return next(new Exception(error.message, 422))
    }
    req.filtered = value
    next()
  };
};
