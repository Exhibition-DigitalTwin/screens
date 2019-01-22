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

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: grey[900] }, // #212121
    secondary: { main: deepOrange.A700 }, // #dd2c00
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
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/aufbau" component={Aufbau} />
                  <Route exact path="/daten" component={Daten} />
                  <Route exact path="/simulation" component={Simulation} />
                  <Route exact path="/annwendungen" component={Anwendungen} />
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
            Hi, I'm a screensaver.
          </p>
  </div>
);

//Aufbau component
const Aufbau = props => (
  <div className="home" style={divStyle} >
     <img src={logo} className="App-logo" alt="logo" />
          <p>
            AUFBAU
          </p>
  </div>
);

//Aufbau component
const Daten = props => (
  <div className="home" style={divStyle} >
     <img src={logo} className="App-logo" alt="logo" />
          <p>
            DATEN
          </p>
  </div>
);

//Aufbau component
const Simulation = props => (
  <div className="home" style={divStyle} >
     <img src={logo} className="App-logo" alt="logo" />
          <p>
            SIMULATION
          </p>
  </div>
);

//Aufbau component
const Anwendungen = props => (
  <div className="home" style={divStyle} >
     <img src={logo} className="App-logo" alt="logo" />
          <p>
            ANWENDUNGEN
          </p>
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;