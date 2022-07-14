const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to your webpage!");
});

app.listen(8080, () => {
    console.log("Hello World!");
});