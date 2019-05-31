import React, { Component } from 'react'
import shelfieIcon from '../assets/shelfie_icon.png'
import { HashRouter as Router, Link} from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

import Dashboard from '../Dashboard'
import Form from '../Form'

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        }

        this.toggleNavbar = this.toggleNavbar.bind(this);
    }
    
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    
    render() {
        return (
        <nav>
            <Router>
            <Navbar className="header" light>
            <NavbarBrand href="/" className="d-flex align-items-center">
                <img className="mr-4" src={shelfieIcon} alt="shelfie logo"/>
                <h1>Shelfie</h1>
                </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar className="flex-row justify-content-around">
                <NavItem>
                    <Link className='navLink' to="/">Dashboard</Link>
                </NavItem>
                <NavItem>
                    <Link className='navLink' to="/form">Add Inventory</Link>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
            </Router>
        </nav>
        )
    }
}

export default Header
