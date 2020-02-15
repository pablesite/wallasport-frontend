import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

// import Login from './Login'
import Home from './Home'
import AdvertDetail from './AdvertDetail'
import CreateOrUpdate from './CreateOrUpdate'
import PrivateRoute from './PrivateRoute'

import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles'

import '../index.css'


export default class App extends Component {

  render() {
    const { history, store } = this.props;

    return (
      <ErrorBoundary >
        <Provider store={store} >
          <MuiThemeProvider theme={theme} >
            <Router history={history}>
              <Switch>
                <Route exact path='/' component={Home} />
                {/* <Route exact path='/login' component={Login}  /> */}
                <Route exact path='/advert/:slugName' component={AdvertDetail} />
                <PrivateRoute exact path='/createOrUpdate/' component={CreateOrUpdate} />
                <PrivateRoute exact path='/createOrUpdate/:slugName' component={CreateOrUpdate} />
                <Route component={Home} />
              </Switch>
            </Router>
          </MuiThemeProvider>
        </Provider>
      </ErrorBoundary>
    );
  }
}