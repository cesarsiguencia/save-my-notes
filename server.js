// const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express')

const PORT = process.env.PORT || 3002;

const app = express();

app.use(express.urlencoded());

app.use(express.json());

app.use(express.static('public'));

// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now active on ${PORT}`)
})
