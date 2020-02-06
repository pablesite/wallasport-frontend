import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "filtering": "Filtering!",
      'Welcome': 'Welcome again!',
      'Register': 'Sign Up in WallaSport!',
      'Register_data': 'Please, insert your personal data',
      'LoginButton': 'Login',
      'RegisterButton': 'Create a new account',
      'Invalid_credentials': 'Invalid credentials',
      'Invalid_data_registered': 'Username or Email is already registered',
      'General_error': 'Ooops! Something went wrong:',
      'API_Unavailable': 'API Unavailable ;(',
      'Logout': 'Log out',
      
      
    }
  },
  es: {
    translation: {
      "filtering": "Filtra!",
      'Welcome': '¡Bienvenido de nuevo!',
      'Register': '¡Regístrate en WallaSport!',
      'Register_data': 'Por favor, inserta tus datos personales',
      'LoginButton': 'Inicia sesión',
      'RegisterButton': 'Crea una cuenta',
      'Invalid_credentials': 'Credenciales incorrectas',
      'Invalid_data_registered': 'El nombre de usuario o el email están ya registrados',
      'General_error': '¡Vaya! Algo no ha ido bien:',
      'API_Unavailable': 'API No Disponible ;(',
      'Logout': 'Cerrar sesión',

    }
  }

};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });


export default i18n;