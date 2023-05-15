const {Pool} = require('pg')

const pool = new Pool({
    user:'postgres',
    password:'6969',
    hots:'5432',
    port:5432,
    database:'Preguntas',


});
module.exports = pool;