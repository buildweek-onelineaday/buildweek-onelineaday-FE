import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>One Line a Day</h1>
      <p>Content Goes Here</p>
      <Router>
        {/* <Route exact path='/' component={LandingPage} /> */}
        {/* <Route exact path='/login' component={LoginPage} /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
