import React from 'react'
import { Button } from 'reactstrap';

const DisplayProducts = (props) => {

    let display = props.products.map((product,index) => {
        return (
            <div className="product-display-item" key={index}>
                <img src={product.image_url} alt="product image"/>
                <div className="aboutProduct">
                    <h2>{product.name}</h2>
                    <h3>{product.price}</h3>
                </div>
                <div className="buttons">
                    <Button color="danger" id={product.product_id}>Delete</Button>
                    <Button color="warning"
                    onClick={() => props.editItem(product)}
                    >Edit</Button>
                </div>
            </div>
        )
    })
        return (
            <div className='display-container'>
                {display}
            </div>
        )
}

export default DisplayProducts
