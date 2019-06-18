import React  from 'react';
import Header from './components/header/header';
import './App.scss';
import Login from './components/login/login';
import { Container } from 'reactstrap';
import Footer from './components/footer/footer';
import { useTranslation } from 'react-i18next';

export function App() {
  const { t } = useTranslation();
  return (

    <Container>
      <Header />
      <Login title={t("Login")} description={t("Description")}  />
      <Footer />
    </Container>
  );
};

export default App;