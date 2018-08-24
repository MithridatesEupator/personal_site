import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import "font-awesome/css/font-awesome.min.css";


let padding = {}

class NavbarCustom extends React.Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <div>
      <Navbar light className="navbar-custom" >
          <NavbarBrand href="/" className="brand-custom">
            <i className="fab fa-react react-brand">
            </i>
            Powered by React.js
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/"  className="resume nav-link">
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/MithridatesEupator" className="github nav-link">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

}

export default NavbarCustom;
