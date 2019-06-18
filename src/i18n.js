import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        'Log in': 'Log in',
        descripitionLogin: 'Please enter your credentials to continue',
        "About US": "About US",
        "Contact US": "Contact US",
        "FAQ": "FAQ",
        "Terms & Conditions": "Terms & Conditions",
        "Forgot my password": "Forgot my password",
        "New user? Register here": "New user? Register here",
        "Login": "Login",
        "Register": "Register",
        "E-mail": "E-mail",
        "Password": "Password"
      }
    },
    ptBr: {
      translations: {
        'Log in': 'Entrar',
        descripitionLogin: 'Por favor insira suas credenciais para continuar',
        "About US": "Sobre nós",
        "Contact US": "Contanto",
        "FAQ": "FAQ",
        "Terms & Conditions": "Termos & Condições",
        "Forgot my password": "Esqueci minha senha",
        "New user? Register here": "Novo usuário? Registre-se aqui",
        "Login": "Entrar",
        "Register": "Cadastrar",
        "E-mail": "E-mail",
        "Password": "Password"

      }
    }
  },
  fallbackLng: "en",
  debug: true,

  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false,

  interpolation: {
    escapeValue: false,
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;