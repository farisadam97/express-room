// import dotenv
require('dotenv').config()

const {SESSION_SECRET} = process.env
const express = require('express')
const path = require('path')

// import router 
const user = require('./routers/users')
// const dashboard = require('./routers/dashboards')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(user)
// app.use(dashboard)

app.use((err, req, res, next) => {
    console.log(err);
    const {message, code = 500, error ="internal server error"} = err;

    return res.status(code).json({
        message,
        code,
        error
    });
})


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server load with port: ${PORT}`)
})