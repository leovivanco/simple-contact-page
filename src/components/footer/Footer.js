import React from 'react';
import { Row, Col } from 'reactstrap';
import Localization from './localization';
import NavFooter from './navFooter';
import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <Row>
        <Col md="3">
          <Localization />
        </Col>
        <Col md="9">
          <NavFooter />
        </Col>
      </Row>
    </footer>
  );
};
