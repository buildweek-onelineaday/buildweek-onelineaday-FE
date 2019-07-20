import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ls from 'local-storage';

export default ({ component: Component, ...otherProps }) => {
  const token = ls.get('userToken');

  if (!token) return <Redirect to='/' />;

  return <Route {...otherProps} render={(props) => <Component {...props} />} />;
};
