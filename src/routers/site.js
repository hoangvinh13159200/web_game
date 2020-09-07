const express = require('express')
const router = express.Router()

const siteControllers = require('../app/controllers/siteControllers')

router.use('/', siteControllers.home) // dinh ngia tuyen duong cho game

module.exports = router;