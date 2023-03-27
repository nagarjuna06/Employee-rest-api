require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const employeeRoute = require('./route')
const app = express()

app.use(express.json())

mongoose.connect(process.env.DB_URL).then(() => console.log("DB Connected!")).catch(err => console.log(err))

app.listen(3000, () => console.log('Server is started'))

app.use('/employee', employeeRoute)
app.get('/', (req, res) => {
    res.redirect('/employee')
})