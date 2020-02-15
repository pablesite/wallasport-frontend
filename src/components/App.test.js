import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './App';
import { createBrowserHistory } from 'history';
import * as  ApiService from '../services/ApiDBService';
import { configureStore } from '../store';



// ATENCIÓN: Mockear el store tal y como se hace en los tests asíncronos de las acciones.

it('renders without crashing', () => {
  const div = document.createElement('div');


  // const history = createBrowserHistory();
// // The user is loaded as long as it is persisted in LS.
// const user = {
//   username: 'pablesite',
//   email: 'pabloruiz@ctnaval.com'
// }

// // Store configuration
// const store = configureStore({
//   history,
//   services: { ApiService },
// })({
//   user,
// });

//////////


//jest.mock('../services/ApiDBService');


const history = createBrowserHistory();
const middlewares = [thunk.withExtraArgument({ history, services: { ApiService } })];
const mockStore = configureStore(middlewares);
const store = mockStore({ });

//////////////


  const props = {store, history}

  ReactDOM.render(<App {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
