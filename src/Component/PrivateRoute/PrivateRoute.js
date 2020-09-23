import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Userconst } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [signInUser, setSignInUser] = useContext(Userconst);
    return (
        <Route
      {...rest}
      render={({ location }) =>
      signInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;