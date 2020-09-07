const express = require('express')
const router = express.Router()

const gameControllers = require('../app/controllers/gameControllers')

router.use('/:slug', gameControllers.show)
router.use('/', gameControllers.index) // dinh ngia tuyen duong cho game

module.exports = router;