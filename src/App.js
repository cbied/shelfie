import React from 'react';
import { HashRouter as Router, Link} from 'react-router-dom'
import routes from './routes'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      

      {routes}
    </Router>
  );
}

export default App;
