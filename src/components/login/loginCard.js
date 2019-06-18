import React from 'react';
import { Col, Row, Button, Form, FormGroup, Input, Container, Nav, NavItem, NavLink } from 'reactstrap';
import { useTranslation } from "react-i18next";

export default function LoginCard() {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="text-center">
        <h1 className="title">{t('Log in')}</h1>
        <p>{t('descripitionLogin')}</p>
      </div>
      <Form>
        <Row form>
          <Col>
            <FormGroup>
              <Input type="email" autoComplete="username" name="email" placeholder={t('EMAIL')} />
            </FormGroup>
            <FormGroup>
              <Input type="password" name="password"
                autoComplete="current-password" placeholder={t('PASSWORD')} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="btn-form">{t('Log in')}</Button>
          </Col>
        </Row>

      </Form>
      <Row className="justify-content-center">
        <Nav navbar>
          <NavItem className="text-center">
            <NavLink className="nav-link-default" href="#">{t('Forgot my password')}</NavLink>
          </NavItem>
          <NavItem className="text-center">
            <NavLink className="nav-link-default" href="#">{t('New user? Register here')}</NavLink>
          </NavItem>
        </Nav>
      </Row>
    </Container>
  );
}