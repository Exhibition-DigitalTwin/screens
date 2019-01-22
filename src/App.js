import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import './App.css';
import 'typeface-roboto';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SideMenu from './SideMenu';
import logo from './logo.svg';
import grey from '@material-ui/core/colors/grey';
import deepOrange from '@material-ui/core/colors/deepOrange';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: grey[900] }, // #212121
    secondary: { main: deepOrange.A700 }, // #dd2c00
  },
  MuiButton: {
    text: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  },
  typography: { useNextVariants: true },
});

const divStyle = {
  width: '70%',
  height: '100%',
};

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <SideMenu></SideMenu>
          <Button>Overrides CSS</Button>
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Home} />
                </Switch>
                </BrowserRouter>
                </MuiThemeProvider>
        </React.Fragment>
      </div>
    );
  }
}

//Home component
const Home = props => (
  <div className="home" style={divStyle} >
     <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, I'm test text.
          </p>
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;