import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import App from './components/App';
import { APIUnavailable } from './components/APIUnavailable';
import Loading from './components/Loading';
import * as serviceWorker from './serviceWorker';

import { getUserFromLS } from './services/Storage';
import { configureStore } from './store';
import { getAdverts, fetchTags} from './store/actions'

import * as  ApiService from './services/ApiDBService'

import './i18n';


// App render
const renderApp = props => {
  ReactDOM.render(<App {...props} />, document.getElementById('root'));
}

// API Unavailable
const renderAPIError = props => {
  ReactDOM.render(<APIUnavailable {...props} />, document.getElementById('root'));
}

// Loader
const renderLoader = () => {
  ReactDOM.render(<Loading />, document.getElementById('root'));
}

// Loader is renderer while the APP is ready
renderLoader();


// Browser history
const history = createBrowserHistory();


// The user is loaded as long as it is persisted in LS.
const user = getUserFromLS() || undefined;

// Store configuration
const store = configureStore({
  history,
  services: { ApiService },
})({
  user,
});


// It is checked if there is an API connection available

store.subscribe(() => {
  const { ui } = store.getState();

  if (ui.apiConnection === true) {
    renderApp({ store, history });
  } else if (ui.apiConnection === false) {
    renderAPIError();
  }

});


// The tags are rendered
// store.dispatch(getAdverts('sort=creationDate'));
store.dispatch(getAdverts());
store.dispatch(fetchTags());


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
