import express from "express";
import company from "../company/company.js";
import validator from "../../middlewares/validation-handler.js";
import { PostCompany, PutCompany } from "../../validation/validation.js";

const companyRoter = express.Router()

export default companyRoter
    .get('/get', company.GET)
    .post('/create', validator(PostCompany), company.POST)
    .patch('/update/:id', validator(PutCompany), company.PATCH)
    .delete('/delete/:id', company.DELETE)