import React, { Component } from 'react';
import imgTv from '../../assets/img/img-tv.png';
import { Row, Col } from 'reactstrap';
import LoginCard from './loginCard';
import './login.scss';
export default class Login extends Component {
  render() {
    return (
      <main className="login">
        <Row>
          <Col md="5" className="img-tv">
            <img src={imgTv} className="img-fluid" alt="img with a tv"/>
          </Col>
          <Col md="7" className="login-card">
            <LoginCard title={this.props.title}  />
          </Col>
        </Row>
      </main>
    );
  }
};