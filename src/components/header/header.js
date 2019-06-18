import React from 'react';
import Logo from './logo/logo';
import NavBar from './navbar/navbar';
import './header.scss'
export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="row">
          <div className="col-6">
            <Logo />
          </div>
          <div className="col-6">
            <NavBar />
          </div>
        </div>
      </header>
    );
  }
};