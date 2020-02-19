import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

//import reducer  from './reducers';
import * as reducers from './reducers';

const configureMiddleware = ({ ...thunkExtraArgument }) => {
  const middlewares = [
    thunkMiddleware.withExtraArgument(thunkExtraArgument),
  ];
  return middlewares;
};


export const configureStore = config => preloadedState =>  {
  const middlewares = configureMiddleware(config);
  const composeEnhancers = composeWithDevTools;

  const store = createStore(
    combineReducers( reducers ),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return store;
};

