const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'chicken_chasers'
})

// Very simple and dumb middleware that attaches the open mysql connection to the request object
// This means you can do req.connection.query now
function db (req, _, next) {
  req.connection = connection

  next()
}

module.exports = db
