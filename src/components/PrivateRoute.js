import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ls from 'local-storage';

export default ({ component: Component, ...otherProps }) => (
  <Route
    {...otherProps}
    render={props => 
      ls.get('userToken') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);