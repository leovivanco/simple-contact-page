import React from 'react';
import imgTv from '../../assets/img/img-tv-2.png';
import { Row, Col } from 'reactstrap';
import LoginCard from './loginCard';
import './login.scss';
export default function Login() {
  return (
    <main className="login">
      <Row>
        <Col md="5" className="img-tv">
          <img src={imgTv} className="img-fluid" alt="img with a tv" />
        </Col>
        <Col md="7" className="login-card">
          <LoginCard />
        </Col>
      </Row>
    </main>
  );
};