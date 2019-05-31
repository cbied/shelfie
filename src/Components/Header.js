import React, { Component } from 'react'
import shelfieIcon from '../assets/shelfie_icon.png'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
            <Navbar className="header" light>
            <NavbarBrand href="/" className="d-flex align-items-center">
                <img className="mr-4" src={shelfieIcon} alt="shelfie logo"/>
                <h1>Shelfie</h1>
                </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar className="flex-row justify-content-around">
                <NavItem>
                    <NavLink className='navLink' href="/components/">Dashboard</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='navLink' href="https://github.com/reactstrap/reactstrap">Add Inventory</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </nav>
        )
    }
}

export default Header
