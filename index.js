const express = require('express');

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
    console.log("server is running on port " + PORT)
});

app.get("/", (req, res) => {
    res.send("test deploy")
});

app.get("/test", (req, res) => {
    res.send("test in test")
})

module.exports = app