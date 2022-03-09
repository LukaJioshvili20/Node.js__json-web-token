const express = require('express')
const router = express.Router()

const {login, dashboard} = require('../controllers/main')

router.route('/dashboard').get(dashboard)
router.route('/dashboard').post(login)

module.exports = router

