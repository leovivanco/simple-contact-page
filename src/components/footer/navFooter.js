import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { useTranslation } from "react-i18next";

export default function NavFooter() {
  const { t } = useTranslation();

  return (
    <Nav className="list-inline d-flex justify-content-end">
      <NavItem className="list-inline-item">
        <NavLink href="#" className="nav-link-default">
          {t('About US')}
        </NavLink>
      </NavItem>
      <NavItem className="list-inline-item">
        <NavLink href="#" className="nav-link-default"> {t('Contact US')}</NavLink>
      </NavItem>
      <NavItem className="list-inline-item">
        <NavLink href="#" className="nav-link-default"> {t('FAQ')}</NavLink>
      </NavItem>
      <NavItem className="list-inline-item">
        <NavLink href="#" className="nav-link-default"> {t('Terms & Conditions')}</NavLink>
      </NavItem>
    </Nav>
  );
};
