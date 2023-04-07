const router = require('express').Router()

const noteRoutes = require('./notesRoute')

router.use('/notes', noteRoutes)

module.exports = router;