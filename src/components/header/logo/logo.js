import React from 'react';
import logoImg from '../../../assets/img/WeCast_D.png';
export default function Logo() {
  return <a href="https://business.wetek.com/wecast/" rel="noopener noreferrer" target="_blank" className="img-logo">
    <img src={logoImg} alt="Logo wetek" className="logo img-fluid" />
  </a>
}