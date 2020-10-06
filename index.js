const { static } = require('express');
const express = require('express');
const app = express();
const port = 80;
const path = require('path');

app.use(static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'html/index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname,'html/about.html')) 
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})