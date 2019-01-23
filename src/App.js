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
import Fade from '@material-ui/core/Fade';

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
    // 1 Aufbau, 2 Daten, 3 Simulation, 4 Anwendungen
    actualState: 0,
    // Aufbau
    showAufbauBasic: false,
    showAufbauExpert1: false,
    // Daten
    showDatenBasic: false,
    // Simulation
    showSimulationBasic: false,
    // Anwendungen
    showAnwendungenBasic: false,
  };

  handleClickShowData = param => e => {
    if (param === "aufbau") {
      this.setState({ actualState: 1, showAufbauBasic: true});
      console.log(this.state.showAufbauBasic);
    } else if (param === "daten") {
      this.setState({ actualState: 2 });
      console.log(this.state.actualState);
    } else if (param === "simulation") {
      this.setState({ actualState: 3 });
      console.log(this.state.actualState);
    } else if (param === "anwendungen") {
      this.setState({ actualState: 4 });
      console.log(this.state.actualState);
    }
    else {
      console.log('dont know what to do with ', param);
    }
  };

  render() {
    const { showAufbauBasic } = this.state;
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
              <Button className='n1' style={{ position: 'absolute', right: distanceFromSide, top: 350, fontSize: '20px' }} onClick={this.handleClickShowData('daten')} >Daten</Button>
              <Button className='n1' style={{ position: 'absolute', right: distanceFromSide, top: 700, fontSize: '20px' }} onClick={this.handleClickShowData('simulation')} >Simulation</Button>
              <Button className='n1' style={{ position: 'absolute', right: distanceFromSide, bottom: distanceFromSide, fontSize: '20px' }} onClick={this.handleClickShowData('anwendungen')} >Anwendungsgebiete</Button>
            </div>
            <Fade in={showAufbauBasic}>
              <div className="aufbauNormal">
                <Button className='n1' style={{ position: 'absolute', left: distanceFromSide, top: distanceFromSide, fontSize: '20px' }} onClick={() => Three.handleClick(0, 90, -0.01)} >Aufbau</Button>
              </div>
            </Fade>
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