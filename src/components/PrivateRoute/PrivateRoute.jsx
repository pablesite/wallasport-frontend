import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import T from 'prop-types';


export default function PrivateRoute({ authorized, ...props }) {

  // Actions of the store
  const { showLoginAction } = props;

  useEffect(() => {
    if (!authorized) { showLoginAction();}
  }, [authorized, showLoginAction]);

  return (
    <React.Fragment>
      {authorized ? <Route {...props} /> : <Redirect to="/login" />}
    </React.Fragment>
  );
}

PrivateRoute.propTypes = {
  authorized: T.bool,
  goToHome: T.func,
};

