import React from 'react';

import { HashRouter as Router, Link} from 'react-router-dom'
import routes from './routes'

import Header from './Components/Header'
import Dashboard from './Dashboard'
import Form from './Form'

import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      currentProduct: {}
    }

    this.componentDidMount = this.componentDidMount.bind(this)
    this.editPost = this.editPost.bind(this)
  }

  componentDidMount() {
    axios
      .get('/products')
      .then(response => {
        this.setState({ products: response.data })
      })
      .catch(error => console.log(error))
  }

  editPost(currentPost) {
    this.setState({ currentProduct: currentPost })
  }

  render() {
    let { products, currentProduct } = this.state
    return (
      <div className="App">
        <Header />

        <div className="App-container">

          <div className="col-left">
            <Dashboard 
            editPostFn={this.editPost}
            didMountFn={this.componentDidMount}
            products={products}
            />
          </div>

          <div className="col-right">
            <Form 
            currentProduct={currentProduct}
            didMountFn={this.componentDidMount}
            />
          </div>

        </div>
      </div>

    );
  }
  
}

export default App;
