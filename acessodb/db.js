import mysql from 'mysql2'

const conecta =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'exerciciodb'
})
export default {conecta}