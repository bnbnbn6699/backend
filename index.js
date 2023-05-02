const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const app = express()
require('dotenv').config()

app.use(cors())

const connection = mysql.createConnection(process.env.DATABASE_URL)

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.send('Hello World')
})

app.get('/attractions', (req, res) => {
    connection.query(
        'SELECT * FROM attractions',
        function(err, results, fields){
            console.log(results)
            res.send(results)
        }
    )
    })

app.listen(process.env.PORT || 3000)

