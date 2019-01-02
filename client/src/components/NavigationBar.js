import React, { Component } from 'react';

import '../styles/NavigationBar.css';

import {
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledCollapse
} from 'reactstrap';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.isActive = this.isActive.bind(this);

    this.state = {
      isOpen: false,
      active: "battlefield"
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  isActive(name) {
    if (this.props.active === name) {
      return "active";
    }

    return;
  }


  render() {
    return (
      <Container
        fluid
        className="h-100 p-0 m-0"
      >

        <Navbar
          light
          expand="lg"
          className="bg-light mh-100 h-100 m-0 p-1 justify-content-between"
        >


          <NavbarBrand
            light
            className="bg-light"
          >
            Mystic-The-Get-Together
          </NavbarBrand>

          <div
            className="navbar-text"
          >
            Life: {this.props.life}
          </div>

          <NavbarToggler
            className="mh-100 h-100 m-0 p-0"
            id="toggler"
          />

          <UncontrolledCollapse
            navbar
            className="pb-1"
            toggler="#toggler"
          >

            <Nav
              className="ml-auto"
              navbar
              pills
              horizontal
            >

              <NavItem>
                <NavLink
                  href="/components/"
                  className={this.isActive("hand")}
                >
                  Hand
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#"
                  className={this.isActive("battlefield")}
                >
                  Battlefield
                </NavLink>
              </NavItem>

              <UncontrolledDropdown
                nav
                inNavbar
              >

                <DropdownToggle
                  nav
                  caret
                >
                  Options
								</DropdownToggle>

                <DropdownMenu
                  right
                >

                  <DropdownItem>
                    Anthony
									</DropdownItem>

                  <DropdownItem>
                    Option 1
									</DropdownItem>

                  <DropdownItem>
                    Option 2
									</DropdownItem>

                  <DropdownItem
                    divider
                  />

                  <DropdownItem>
                    Reset
							    </DropdownItem>

                </DropdownMenu>

              </UncontrolledDropdown>

            </Nav>

          </UncontrolledCollapse>

        </Navbar>

      </Container>
    );
  }
}

export default NavigationBar;