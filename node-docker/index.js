const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    console.log(`Example app listening on port ${port}!`);
    res.send('Hi, Pratik Ghelaniasdasd');
})

app.get('/demo', (req, res) => {
    res.send('Testasdasd');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})