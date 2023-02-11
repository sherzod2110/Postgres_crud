import Joi from "joi";

export const PostCompany = Joi.object({
    company_name: Joi.string().max(64).required(),
    company_price: Joi.number().required()
}).required()

export const PutCompany = Joi.object({
    company_name: Joi.string().max(64),
    company_price: Joi.number()
}).required()