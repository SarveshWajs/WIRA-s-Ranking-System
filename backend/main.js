require('dotenv').config();
const { Pool } = require('pg');

const  pool = new Pool({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Naruto2493#",
    database:"Wira"
});

// Export the Pool instance for use in other files
module.exports = pool;



