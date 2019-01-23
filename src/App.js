import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import './App.css';
import 'typeface-roboto';
import Three from './Three';
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
  state = {
    actualState: 0,
  };

  handleClickShowData = param => e => {
    if (param === "aufbau") {
      console.log('this is correct!', param);
    }
  };

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
            <div className="menu">
              <Button className='n1' style={{ position: 'absolute', right: distanceFromSide, top: distanceFromSide, fontSize: '20px' }} onClick={this.handleClickShowData('aufbau')} >Aufbau</Button>
              <Button className='n1' style={{ position: 'absolute', right: distanceFromSide, top: 350, fontSize: '20px' }}>Daten</Button>
              <Button className='n1' style={{ position: 'absolute', right: distanceFromSide, top: 700, fontSize: '20px' }}>Simulation</Button>
              <Button className='n1' style={{ position: 'absolute', right: distanceFromSide, bottom: distanceFromSide, fontSize: '20px' }}>Anwendungsgebiete</Button>
            </div>
          </MuiThemeProvider>
        </React.Fragment>
      </div>
    );
  }
}

//Home component
const Home = props => (
  <div className="screensaver" style={{ position: 'absolute', top: distanceFromSideInfoNormal, left: distanceFromSideInfoNormal, }} >
    <img src={logo} className="App-logo" alt="logo" />
    <p style={{ color: textColorNormal, fontSize: textFontNormal }}>
      Hi, I'm a screensaver.
    </p>
    <Button className='n1' onClick={//Three.handleClick(0, 180, (-0.01))
      console.log("test")}>Turn -180°</Button>
  </div>
);

//Aufbau component
const Aufbau = props => (
  <div className="aufbau" style={{ position: 'absolute', top: distanceFromSideInfoNormal, left: distanceFromSideInfoNormal, }} >
    <p style={{ color: textColorNormal, fontSize: textFontNormal }}>
      AUFBAU
    </p>
  </div>
);

//Aufbau component
const Daten = props => (
  <div className="daten" style={{ position: 'absolute', top: distanceFromSideInfoNormal, left: distanceFromSideInfoNormal, }} >
    <p style={{ color: textColorNormal, fontSize: textFontNormal }}>
      DATEN
    </p>
  </div>
);

//Aufbau component
const Simulation = props => (
  <div className="simulation" style={{ position: 'absolute', top: distanceFromSideInfoNormal, left: distanceFromSideInfoNormal, }} >
    <p style={{ color: textColorNormal, fontSize: textFontNormal }}>
      SIMULATION
    </p>
  </div>
);

//Aufbau component
const Anwendungen = props => (
  <div className="anwendungen" style={divStyle} >
    <p style={{ color: textColorNormal, fontSize: textFontNormal }}>
      ANWENDUNGEN
          </p>
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;