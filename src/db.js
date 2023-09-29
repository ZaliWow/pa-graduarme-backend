const {Pool} = require('pg') 

const connectionString = ('postgres://eldanlyv:DPj1GI5m55DAP3BdDI7AQEXmS8SoRpVT@berry.db.elephantsql.com/eldanlyv')
const pool = new Pool({
    connectionString : connectionString,

});
module.exports = pool;