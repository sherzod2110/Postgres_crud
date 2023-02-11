import pg from 'pg';

const { Pool } = pg

const pool = new Pool({
    connectionString: 'postgres://postgres:sherzod2110@localhost:5432/build_company'
})

export const fetchData = async (SQL, ...params) => {
    const clint = await pool.connect()
    try {
        const { rows } = await clint.query(SQL, params.length ? params : null)
        return rows
    } finally {
        clint.release()
    }
}

export const fetchOnly = async (SQL, ...params) => {
    const clint = await pool.connect()
    try {
        const { rows: [row] } = await clint.query(SQL, params.length ? params : null)
        return row
    } finally {
        clint.release()
    }
}