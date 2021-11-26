const router = require('express').Router()

const { viewDashboard } = require('../controllers/dashboard.controller')
const restrict = require('../middlewares/restrict')

router.get('/dashboard', restrict, viewDashboard)

module.exports = router