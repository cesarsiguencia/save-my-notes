const router = require('express').Router()

router.use(require('./notesRoute'))

console.log("indexAPI going through")

module.exports = router;