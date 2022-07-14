const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("WELCOME TO YOUR WEBPAGE v4!");
});

app.listen(8080, () => {
    console.log("Hello World!");
});