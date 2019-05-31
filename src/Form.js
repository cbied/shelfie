import React from 'react';
import axios from 'axios'
import { InputGroup, InputGroupText, InputGroupAddon, Input, Button } from 'reactstrap';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentProduct: null,
            name: '',
            price: '',
            image_url: ''
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    handleOnChange(e) {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    handleAdd() {
        let { name, price, image_url } = this.state;

        axios
            .post('/products', { name: name, price: price, image_url: image_url}) 
        this.setState({
            name: '',
            price: '',
            image_url: '',
            currentProduct: null
        })

        this.props.didMountFn()
    }

    handleCancel() {
        this.setState({
            currentProduct: null,
            name: '',
            price: '',
            image_url: ''
        })

        
    }

    handleEdit(){
        const {name , price, image_url, currentProduct} = this.state;
        axios
            .put(`/products/${currentProduct}`, {name: name, price: price, imgUrl: image_url})
        }


    render() {
        let { name, price, image_url } = this.state
        return (
            <div className='form-container'>
                <img src="" alt="" className="formImg"/>
                <h6>Add your product</h6>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>Image URL</InputGroupText>
                    </InputGroupAddon>
                    <Input type='text' onChange={this.handleOnChange} value={image_url} name='image_url'/>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>Product Name</InputGroupText>
                    </InputGroupAddon>
                    <Input type='text' onChange={this.handleOnChange} value={name} name='name'/>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>Price</InputGroupText>
                    </InputGroupAddon>
                    <Input type='number' onChange={this.handleOnChange} value={price} name='price'/>
                </InputGroup>
                <div>
                

            {this.state.currentProduct === null ?  
                <div>
                <Button outline color="primary" 
                    onClick={this.handleAdd}>Add Products
                </Button>
                <Button outline color="warning"
                    onClick={this.handleCancel}
                    >Cancel
                    </Button>
                </div>
                    : 
                <Button outline color="primary" 
                onClick={this.handleEdit}>Save Changes
                </Button> }
                            </div>
                        </div>
                    )
                }
}

export default Form
