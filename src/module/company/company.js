import { getCompany, createdCompany, updateCompany, deleteCompany } from './model.js'
import { Exception } from '../../exception/exception.js'

export default {
    GET: async(req, res, next) => {
        const allCompany = await getCompany()
        .catch(err => next(new Exception(err.message, 503)))
        
        if(allCompany) res.json(allCompany)
    },
    POST: async(req, res, next) => {
        const { company_name, company_price } = req.filtered

        const newCompany = await createdCompany(company_name, company_price)
        .catch(err => next(new Exception(err.message, 503)))

        if(newCompany) res.status(201).json({
            status: 201,
            message: 'Company created'
        })
    },
    PATCH: async(req, res, next) => {
        const { id } = req.params
        const { company_name, company_price } = req.filtered

        const updatedCompany = await updateCompany(company_name, company_price, id)
        .catch(err => next(new Exception(err.message, 503)))

        if(updatedCompany) res.status(200).json({
            status: 200,
            message: 'Company update'
        })
    },
    DELETE: async(req, res, next) => {
        const { id } = req.params

        const deletedCompany = await deleteCompany(id)
        .catch(err => next(new Exception(err.message, 503)))

        if(deletedCompany) res.status(200).json({
            status: 200,
            message: 'Company deleted'
        })
    }
}