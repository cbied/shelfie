

const getAll = (req,res) => {
    const db = req.app.get('db')
    
    db.getAll_products()
        .then(products => res.status(200).send(products))
        .catch(error => res.status(500).send(`getALLproducts: ${error}`))
}

const addProduct = (req,res) => {
    const db = req.app.get('db'),  
        { name, price, image_url } = req.body

    db.create_product( name, price, image_url )
        .then(product => res.status(200).send(product))
        .catch(error => res.status(500).send(`ADDproduct: ${error}`))
}

const deleteProduct = (req,res) => {
    console.log('delete reached')
    const db = req.app.get('db'),
        { id } = req.params;

    db.delete_product( id )
        .then(() => res.sendStatus(200))
        .catch(error => res.status(500).send(`DELETE: ${error}`))
}

const editItem = (req,res) => {
    console.log(req.params, req.body)
    const db = req.app.get('db');
    const {price, name, image_url} = req.body;

    db.edit_product( name, price, image_url)
    .then(() => res.sendStatus(200))
    .catch(error => res.status(500).send(`EDIT: ${error}`))
}






module.exports = {
    getAll,
    addProduct,
    deleteProduct,
    editItem
}