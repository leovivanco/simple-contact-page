import React from 'react';
import { Col, Row, Button, Form, FormGroup, Input, Container, Nav, NavItem, NavLink } from 'reactstrap';

export default class LoginCard extends React.Component {
  render() {
    return (
      <Container>
        <h1>Log in</h1>
        <p>Please enter your credentials to continue</p>
        <Form>
          <Row form>
            <Col>
              <FormGroup>
                <Input type="email" autoComplete="username" name="email" placeholder="E-MAIL" />
              </FormGroup>
              <FormGroup>
                <Input type="password" name="password" 
                  autoComplete="current-password" placeholder="PASSWORD" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button>Log in</Button>
            </Col>
          </Row>

        </Form>
        <Row>
          <Nav navbar>
            <NavItem>
              <NavLink>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Register</NavLink>
            </NavItem>
          </Nav>
        </Row>
      </Container>
    );
  }
}