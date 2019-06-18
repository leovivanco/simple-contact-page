import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" className="navbar-expand-lg justify-content-end" light>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="justify-content-end" isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink>Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Register</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
};