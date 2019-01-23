import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import './App.css';
import 'typeface-roboto';
import Three from './Three';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
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
  typography: {
    useNextVariants: true,
  },
});

// variables for screen design
const distanceFromSide = 30;
const distanceFromSideInfoNormal = 100;
const textColorNormal = '#FFFFFF';
const textFontNormal = 20;

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
            <Three />
            <Menu></Menu>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/aufbau" component={Aufbau} />
                <Route path="/daten" component={Daten} />
                <Route path="/simulation" component={Simulation} />
                <Route path="/anwendungsgebiete" component={Anwendungen} />
              </Switch>
            </BrowserRouter>
          </MuiThemeProvider>
        </React.Fragment>
      </div>
    );
  }
}

//Home component
const Menu = props => (
  <div className="menu">
    <BrowserRouter>
      <Link to="/aufbau" style={{ textDecoration: 'none', color: 'white', position: 'absolute', right: distanceFromSide, top: distanceFromSide, }}>
        <Button className='n1' style={{ fontSize: '20px' }}>Aufbau</Button>
      </Link>
    </BrowserRouter><BrowserRouter>
      <Link to="/daten" style={{ textDecoration: 'none', color: 'white', position: 'absolute', right: distanceFromSide, top: 350, }}>
        <Button className='n1' style={{ fontSize: '20px' }}>Daten</Button>
      </Link>
    </BrowserRouter><BrowserRouter>
      <Link to="/simulation" style={{ textDecoration: 'none', color: 'white', position: 'absolute', right: distanceFromSide, top: 700, }}>
        <Button className='n1' style={{ fontSize: '20px' }}>Simulation</Button>
      </Link>
    </BrowserRouter><BrowserRouter>
      <Link to="/anwendungsgebiete" style={{ textDecoration: 'none', color: 'white', position: 'absolute', right: distanceFromSide, bottom: distanceFromSide, }}>
        <Button className='n1' style={{ fontSize: '20px' }}>Anwendungsgebiete</Button>
      </Link>
    </BrowserRouter>
  </div>
);

//Home component
const Home = props => (
  <div className="screensaver" style={{ position: 'absolute', top: distanceFromSideInfoNormal, left: distanceFromSideInfoNormal, }} >
    <img src={logo} className="App-logo" alt="logo" />
    <p style={{color: textColorNormal, fontSize: textFontNormal}}>
      Hi, I'm a screensaver.
    </p>
  </div>
);

//Aufbau component
const Aufbau = props => (
  <div className="aufbau" style={{ position: 'absolute', top: distanceFromSideInfoNormal, left: distanceFromSideInfoNormal, }} >
    <p style={{color: textColorNormal, fontSize: textFontNormal}}>
      AUFBAU
    </p>
  </div>
);

//Aufbau component
const Daten = props => (
  <div className="daten" style={{ position: 'absolute', top: distanceFromSideInfoNormal, left: distanceFromSideInfoNormal, }} >
    <p style={{color: textColorNormal, fontSize: textFontNormal}}>
      DATEN
    </p>
  </div>
);

//Aufbau component
const Simulation = props => (
  <div className="simulation" style={{ position: 'absolute', top: distanceFromSideInfoNormal, left: distanceFromSideInfoNormal, }} >
    <p style={{color: textColorNormal, fontSize: textFontNormal}}>
      SIMULATION
    </p>
  </div>
);

//Aufbau component
const Anwendungen = props => (
  <div className="anwendungen" style={divStyle} >
    <p style={{color: textColorNormal, fontSize: textFontNormal}}>
      ANWENDUNGEN
          </p>
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;