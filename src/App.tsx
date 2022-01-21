import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';

import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';


import Blog from './pages/Blog';
import Signup from './pages/Signup';
import SignIn from './pages/Signin'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffb74d',
    },
    secondary: {
      main: '#000000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>

    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={SignIn} />

        </Switch>
      </Router>
    </div>
    </ThemeProvider>

  );
}

export default App;
