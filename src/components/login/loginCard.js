import React from 'react';
import { Col, Row, Button, Form, FormGroup, Input, Container, Nav, NavItem, NavLink, FormFeedback } from 'reactstrap';
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
              <FormFeedback>You will not be able to see this</FormFeedback>
              <Input type="email" autoComplete="username" name="email" placeholder={t('Email')} required />
            </FormGroup>
            <FormGroup>
              <FormFeedback>You will not be able to see this</FormFeedback>

              <Input type="password" name="password"
                autoComplete="current-password" placeholder={t('Password')} maxLength="8" minLength="8" required />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="submit" className="btn-form">{t('Log in')}</Button>
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