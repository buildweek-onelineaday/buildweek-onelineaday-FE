import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginView from './views/LoginView';
import Dashboard from './components/Dashboard';

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
        {/* <Route exact path='/' component={LandingView} /> */}
        <Route exact path='/login' component={LoginView} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
