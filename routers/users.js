const routers = require('express').Router()

const {viewRegister,viewLogin,register,login} = require('../controllers/users.controller')
const { validate } = require('../middlewares/validation')
const { registerSchema } = require('../schemas/register')


routers.get('/login', viewLogin)
routers.post('/login', login)



routers.get('/register', viewRegister)
routers.post('/register', validate(registerSchema), register)

module.exports = routers
