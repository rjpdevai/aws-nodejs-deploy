const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
require('dotenv').config();
const APP_NAME = process.env.NAME || 'AWS-node-app';

app.get('/api/get', (req, res) => {
    res.send({ message: "Hello world from " + APP_NAME });
});

app.get('/api/get_user', (req, res) => {
    res.send({ user: { name: "John Doe", age: 30 } });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`${APP_NAME} running at port ${PORT}`);
});