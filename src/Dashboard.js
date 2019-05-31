import React from 'react'
import axios from 'axios'
import DisplayProducts from './Components/DisplayProducts';

const Dashboard = (props) => {

    // const deleteProduct = (e) => {
        
    //     let id = e.target.id;
    //     axios
    //         .delete(`/products${id}`)
    //         .then(response => console.log(`need to update ${response}`))
    //         .catch(error => console.log(error))

    //         props.didMountFn()
    // }
        return (
            <div className='dashboard-container'>
                <DisplayProducts 
                didMountFn={props.didMountFn}
                editItem={props.editItem} 
                // deleteFn={deleteProduct} 
                products={props.products}
                />
                {/* Product display Component
                props needed: 
                editItem={props.editItem} 
                deleteFn={this.deleteProduct} 
                products={props.products}
                */}
            </div>
        )
}

export default Dashboard
