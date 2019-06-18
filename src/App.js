import React from 'react';
import Header from './components/header/header';
import './App.scss';
import Login from './components/login/login';
import { Container } from 'reactstrap';
import Footer from './components/footer/footer';
export default (props) => {
  return (
    <Container>
      <Header />
      <Login />
      <Footer />
    </Container>
  );
};
