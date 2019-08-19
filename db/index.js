const mysql = require('mysql')

const opts = process.env.JAWSDB_URL || {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'chicken_chasers'
}

const connection = mysql.createConnection(opts).connect(err => {
  if (err) {
    throw err
  }
})

// Very simple and dumb middleware that attaches the open mysql connection to the request object
// This means you can do req.connection.query now
function db (req, _, next) {
  req.connection = connection

  next()
}

module.exports = db
