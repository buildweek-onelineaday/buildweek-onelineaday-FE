import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
<<<<<<< HEAD
import LoginView from './views/LoginView';
import Dashboard from './components/Dashboard';
=======
import { PrivateRoute } from './components';
import LoginPage from './views/LoginPage';
import Dashboard from './views/Dashboard';
>>>>>>> 1d72eb7b233f6306cb7d50b6053b87fb0c55c4b4

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
      <Router>
<<<<<<< HEAD
        {/* <Route exact path='/' component={LandingView} /> */}
        <Route exact path='/login' component={LoginView} />
        <Route exact path='/dashboard' component={Dashboard} />
=======
        {/* <Route exact path='/' component={LandingPage} /> */}
        {/* <Route exact path='/login' component={LoginPage} /> */}
        <Route exact path='/' component={LoginPage} />
        <PrivateRoute
          exact path="/dashboard"
          component={Dashboard}
        />
>>>>>>> 1d72eb7b233f6306cb7d50b6053b87fb0c55c4b4
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
