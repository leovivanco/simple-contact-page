import React from 'react';
import Logo from './logo/logo';
import NavBar from './navbar/navbar';
import './header.scss';
import { useTranslation } from "react-i18next";

export default function Header() {

  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="row">
        <div className="col-6">
          <Logo />
        </div>
        <div className="col-6">
          <NavBar link1={t('Login')} link2={t('Register')} />
        </div>
      </div>
    </header>
  );
};
