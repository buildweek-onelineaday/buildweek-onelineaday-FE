import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PrivateRoute } from './components';
import LoginPage from './views/LoginPage';
import Dashboard from './views/Dashboard';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#efefef',
      main: '#bdbdbd',
      dark: '#8d8d8d',
      contrastText: '#000',
    },
    secondary: {
      light: '#62efff',
      main: '#00bcd4',
      dark: '#008ba3',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      {/* <h1>One Line a Day</h1>
      <p>Content Goes Here</p> */}
      <Router>
        {/* <Route exact path='/' component={LandingPage} /> */}
        {/* <Route exact path='/login' component={LoginPage} /> */}
        <Route exact path='/' component={LoginPage} />
        <PrivateRoute
          exact path="/dashboard"
          component={Dashboard}
        />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
