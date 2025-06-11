const express = require('express');
const app = express();

app.get('/api/get', (req, res) => {
    res.send({ message: "Hello world from node js" })
});

app.listen(5000, () => {
    console.log('App running at port 5000');
});