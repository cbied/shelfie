require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    app = express(),
    // path = /apl/,
    { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json())

app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT} is listening`)
})