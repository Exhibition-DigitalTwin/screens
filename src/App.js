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
    // screensaver
    showScreensaverBasic: false,
    // Aufbau
    showAufbauBasic: false,
    // Daten
    showDatenBasic: false,
    showDatenExpert1: false,
    showDatenExpert2: false,
    showDatenExpert3: false,
    // Simulation
    showSimulationBasic: false,
    showSimulationExpert1: false,
    showSimulationExpert2: false,
    // Anwendungen
    showAnwendungenBasic: false,
  };

  handleClickShowData = param => e => {
    if (param === "aufbau") {
      this.setState({ actualState: 1, showAnwendungenBasic: false, showScreensaverBasic: false, showAufbauBasic: true });
      console.log(this.state.showAufbauBasic);
    } else if (param === "daten") {
      this.setState({ actualState: 2, showAufbauBasic: false, showDatenBasic: true });
    } else if (param === "simulation") {
      this.setState({ actualState: 3, showDatenBasic: false, showDatenExpert1: false, showDatenExpert2: false, showDatenExpert3: false, showSimulationBasic: true });
    } else if (param === "anwendungen") {
      this.setState({ actualState: 4, showAufbauBasic: false, showSimulationBasic: false, showSimulationExpert1: false, showSimulationExpert2: false, showAnwendungenBasic: true });
    } else if (param === "screensaver") {
      this.setState({ actualState: 0, showAufbauBasic: false, showDatenBasic: false, showDatenExpert1: false, showDatenExpert2: false, showDatenExpert3: false, showSimulationBasic: false, showSimulationExpert1: false, showSimulationExpert2: false, showAnwendungenBasic: false, showScreensaverBasic: true });
    } else {
      console.log('dont know what to do with ', param);
    }
  };

  render() {
    const { showScreensaverBasic, showAufbauBasic, showDatenBasic, showDatenExpert1, showDatenExpert2, showDatenExpert3, showSimulationBasic, showSimulationExpert1, showSimulationExpert2, showAnwendungenBasic } = this.state;
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
            {/* SCREENSAVER */}
            <Fade in={showScreensaverBasic}>
              <div className="aufbauNormal">
                <Button className='n1' style={{ position: 'absolute', left: distanceFromSide, top: distanceFromSide, fontSize: '20px' }} onClick={() => Three.handleClick(0, 90, -0.01)} >SCREENSAVER</Button>
              </div>
            </Fade>
            {/* AUFBAU */}
            <Fade in={showAufbauBasic}>
              <div className="aufbauNormal">
                <Button className='n1' style={{ position: 'absolute', left: distanceFromSide, top: distanceFromSide, fontSize: '20px' }} onClick={() => Three.handleClick(0, 90, -0.01)} >Aufbau</Button>
              </div>
            </Fade>
            {/* DATEN */}
            <Fade in={showDatenBasic}>
              <div className="aufbauNormal">
                <Button className='n1' style={{ position: 'absolute', left: distanceFromSide, top: distanceFromSide, fontSize: '20px' }} onClick={() => Three.handleClick(0, 90, -0.01)} >Daten</Button>
              </div>
            </Fade>
            {/* SIMULATION */}
            <Fade in={showSimulationBasic}>
              <div className="aufbauNormal">
                <Button className='n1' style={{ position: 'absolute', left: distanceFromSide, top: distanceFromSide, fontSize: '20px' }} onClick={() => Three.handleClick(0, 90, -0.01)} >Simulation</Button>
              </div>
            </Fade>
            {/* ANWENDUNGSFELDER */}
            <Fade in={showAnwendungenBasic}>
              <div className="aufbauNormal">
                <Button className='n1' style={{ position: 'absolute', left: distanceFromSide, top: distanceFromSide, fontSize: '20px' }} onClick={() => Three.handleClick(0, 90, -0.01)} >Anwendungsfelder</Button>
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

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;