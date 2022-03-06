const express = require('express')

const htmlRoutes = require('./routes/htmlRoutes/indexHtml')

const app = express()

const PORT = process.env.PORT || 3002

app.use(express.static('public'))

app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now active on ${PORT}`)
})
