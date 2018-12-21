import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/NavigationBar.css';

import {
  Button,
  Container,
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
  DropdownItem
} from 'reactstrap';

class NavigationBar extends Component {
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
      <div className="nb-wrapper">
        <Navbar color="light" light expand="lg">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar vertical pills>
              <NavItem>
                <NavLink href="/components/">Hand</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Battlefield</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
										</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Anthony
											</DropdownItem>
                  <DropdownItem>
                    Option 1
											</DropdownItem>
                  <DropdownItem>
                    Option 2
											</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
							</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;