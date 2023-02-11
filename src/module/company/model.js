import { fetchData, fetchOnly } from '../../utils/postgres.js'

const ALL_COMPANY = `
    SELECT * FROM buildCompany
`

const NEW_COMPANY = `
    INSERT INTO buildCompany(company_name, company_price) values($1, $2)
`
 
const UPDATE_COMPANY = `
    UPDATE buildCompany SET company_name = $1, company_price = $2 WHERE company_id = $3 RETURNING *
`

const DELETE_COMPANY = `
    DELETE FROM buildCompany WHERE company_id = $1 RETURNING *
`

export const getCompany = _ => fetchData(ALL_COMPANY);
export const createdCompany = (company_name, company_price) => fetchData(NEW_COMPANY, company_name, company_price)
export const updateCompany = async(company_name, company_price, id) => {
    const existing = await fetchOnly('SELECT * FROM buildCompany WHERE company_id = $1', id)

    return fetchData(
        UPDATE_COMPANY,
        company_name ? company_name : existing.company_name,
        company_price ? company_price : existing.company_price,
        id
    )
}

export const deleteCompany = id => fetchData(DELETE_COMPANY, id)
