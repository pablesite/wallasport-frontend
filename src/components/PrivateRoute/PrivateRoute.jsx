// Listo
import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';

// const PrivateRoute = ({ authorized, ...props }) =>
//   authorized ? <Route {...props} /> : <Redirect to="/login" />;

export default function PrivateRoute({ authorized, ...props }) {


  const { goLogin } = props;

  console.log('authorized ', authorized)

  useEffect(() => {
    if (!authorized) {
      goLogin();
    }
  }, [authorized]);

  return (
    <React.Fragment>

      {authorized ? <Route {...props} /> : <Redirect to="/login" />}

      {/* { authorized &&<Route {...props} /> }

      { !authorized && <Redirect to="/login" /> } */}

    </React.Fragment>
  );
}



// export default PrivateRoute;
