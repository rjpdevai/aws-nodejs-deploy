const express = require('express');
const app = express();
const PORT = 8000;


app.get('/api/get', (req, res) => {
    res.send({ message: "Hello world from node js" })
});

app.get('/api/get_user', (req, res) => {
    res.send({ user: { name: "John Doe", age: 30 } });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`App running at port ${PORT}`);
});