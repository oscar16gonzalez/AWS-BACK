const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.end('Hello world Express')
})

app.listen(3000);
console.log("sever on port 3000");