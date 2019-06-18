import React from 'react';
import { Row, Col } from 'reactstrap';
import Localization from './localization';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="login">
        <Row>
          <Col md="6">
            <Localization />
          </Col>
          <Col md="6">
          </Col>
        </Row>
      </footer>
    );
  }
};