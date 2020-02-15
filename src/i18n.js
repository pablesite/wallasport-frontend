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
      'UserRegistered': 'User has been registered succesfully. Please, go to login: ',
      'Register_data': 'Please, insert your personal data',
      'LoginButton': 'Login',
      'RegisterButton': 'Create a new account',
      'Invalid_credentials': 'Invalid credentials',
      'Invalid_data_registered': 'Username or Email is already registered',
      'General_error': 'Ooops! Something went wrong:',
      'API_Unavailable': 'API Unavailable ;(',
      'Logout': 'Log out',
      'CreateProduct': 'Upload new product',
      'Messages': 'Messages',
      'SearchProduct': 'Search products',
      'CreateAdvert': 'Upload a new product',
      'UpdateAdvert': 'Edit this product',
      'FilteringButton': 'Filter products',
      'UploadYourProduct': 'What are you waiting for? Upload your product!',
      'Sale': 'Sale',
      'Buy': 'Buy',
      'NoAdverts': 'There is no product. Please, try another search',
      'NameOfPhoto': 'The photo entered has the name: ',
      'DeleteAlert': 'You are about to delete this product. This operation cannot be undone.',
      'Disagree': 'Disagree',
      'Agree': 'Agree',
      'Warning': 'Warning!',
      'FindProducts': 'Find products according to your preferences',
      'NameInitials': 'Name Initials',
      'OneFreeTag': '[1] Tag',
      'Of': 'of',
      
    }
  },
  es: {
    translation: {
      "filtering": "Filtra!",
      'Welcome': '¡Bienvenido de nuevo!',
      'Register': '¡Regístrate en WallaSport!',
      'UserRegistered': 'El usuario se ha registrado correctamente. Por favor, ve a la sección de inicio de sesión: ',
      'Register_data': 'Por favor, inserta tus datos personales',
      'LoginButton': 'Inicia sesión',
      'RegisterButton': 'Crea una cuenta',
      'Invalid_credentials': 'Credenciales incorrectas',
      'Invalid_data_registered': 'El nombre de usuario o el email están ya registrados',
      'General_error': '¡Vaya! Algo no ha ido bien:',
      'API_Unavailable': 'API No Disponible ;(',
      'Logout': 'Cerrar sesión',
      'CreateProduct': 'Sube un nuevo producto',
      'Messages': 'Mensajes',
      'SearchProduct': 'Busca productos',
      'CreateAdvert': 'Subir nuevo producto',
      'UpdateAdvert': 'Edita este producto',
      'FilteringButton': 'Filtra productos',
      'UploadYourProduct': '¿A qué esperas? ¡Sube tu producto!',
      'Sale': 'Venta',
      'Buy': 'Compra',
      'NoAdverts': 'No hay ningún producto disponible. Por favor, intenta otra búsqueda.',
      'NameOfPhoto': 'La foto subida tiene se llama: ',
      'DeleteAlert': 'Estás a punto de borrar este producto. Esta operación no se puede deshacer.',
      'Disagree': 'Cancelar',
      'Agree': 'De acuerdo',
      'Warning': '¡Atención!',
      'FindProducts': 'Encuentra productos de acuerdo tus preferencias',
      'NameInitials': 'Iniciales del Nombre',
      'OneFreeTag': '[1] etiqueta',
      'Of': 'de',
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