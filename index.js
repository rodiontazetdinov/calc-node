const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const { postForm } = require('./helpers');

const { PORT = 3000 } = process.env;

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.post('/', postForm); 


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
}) 