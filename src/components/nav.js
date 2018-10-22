import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarToggler onClick={this.toggle} />
           <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            	<NavItem>
                	<NavLink href="/components/">Home</NavLink>
            	</NavItem>
            	<NavItem>
                	<NavLink href="https://github.com/reactstrap/reactstrap">Order</NavLink>
            	</NavItem>
               	<NavItem>
               		<NavLink>
                 		Events
                 	</NavLink>
               	</NavItem>
               	<NavItem>
               		<NavLink>
                 		Order
                 	</NavLink>
               	</NavItem>
               	<NavItem>
               		<NavLink>
                 		Contact Us
                 	</NavLink>
               	</NavItem>
            </Nav>
          </Collapse>
          <NavItem>
          	Link
          </NavItem>
          <NavItem>
          	Link
          </NavItem>
        </Navbar>
      </div>
    );
  }
}