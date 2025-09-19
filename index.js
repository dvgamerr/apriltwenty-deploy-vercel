const express = require('express');

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
    console.log("server is running on port " + PORT)
});

app.get("/", (req, res) => {
    res.send("GET: test deploy")
});

app.post("/", (req, res) => {
    res.send("POST:> test in test")
})

module.exports = app