import React, { Component } from 'react';
import logoImg from '../../../assets/img/WeCast_D.png';
export default class Logo extends Component {
  render() {
    return <a href="https://business.wetek.com/wecast/" rel="noopener noreferrer" target="_blank"  className="img-logo">
      <img src={logoImg} alt="" className="logo img-fluid" />
    </a>
  }
}