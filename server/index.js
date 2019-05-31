require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    app = express(),
    path = '/products',
    productController = require('./productController'),
    { SERVER_PORT, CONNECTION_STRING } = process.env;


massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log("it's ALIVE")
    })
    .catch(error => {
        console.log(`oops! you got an error: ${error}`)
    })

app.use(express.json())

app.get(path, productController.getAll)
app.post(path, productController.addProduct)
app.delete(`${path}/:id`, productController.deleteProduct)
app.put(`${path}/:id`, productController.editItem)

app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT} is listening`)
})