import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        Introduction: "Introduction",
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
        "EMAIL": "EMAIL",
        "PASSWORD": "PASSWORD"
      }
    },
    ptBr: {
      translations: {
        Introduction: "前書き",
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
        "EMAIL": "E-MAIL",
        "PASSWORD": "SENHA"

      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;