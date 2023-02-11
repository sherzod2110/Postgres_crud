import express from "express";
import companyRoter from './company/routes.js'

const router = express.Router()

export default router
    .use('/companies', companyRoter)