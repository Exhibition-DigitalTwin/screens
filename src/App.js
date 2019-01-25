import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import './App.css';
import 'typeface-roboto';
import Three from './Three';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import deepOrange from '@material-ui/core/colors/deepOrange';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import { easeExpOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import SvgIcon from '@material-ui/core/SvgIcon';
import Fab from '@material-ui/core/Fab';

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
const textLineHeightNormal = 26;
const fadeTimeBasicIn = 4000;
const fadeTimeBasicOut = 500;

const h1Style = {
  position: 'absolute',
  lineHeight: '73px',
  color: textColorNormal,
  left: distanceFromSide * 7,
  top: distanceFromSide * 4,
  fontSize: '70px',
  width: '20%',
  textAlign: 'left',
};

const h2Style = {
  position: 'absolute',
  lineHeight: '46px',
  color: textColorNormal,
  left: distanceFromSide * 7,
  top: distanceFromSide * 4,
  fontSize: '40px',
  width: '20%',
  textAlign: 'left',
};

const pStyle = {
  position: 'absolute',
  lineHeight: textLineHeightNormal + 'px',
  color: textColorNormal,
  left: distanceFromSide * 7,
  bottom: distanceFromSide * 7 - 40,
  fontSize: textFontNormal + 'px',
  width: '20%',
  textAlign: 'left',
};

const pExpertStyle = {
  position: 'absolute',
  lineHeight: textLineHeightNormal + 'px',
  color: textColorNormal,
  left: distanceFromSide * 21,
  bottom: distanceFromSide * 7 - 40,
  fontSize: textFontNormal + 'px',
  width: '20%',
  textAlign: 'left',
};

const expertStyleToEnter = {
  fontWeight: 'bold',
}

function AufbauIcon(props) {
  return (
    <SvgIcon {...props}>
      <g>
	<polygon class="st0" points="15.7,8.9 8.1,8.9 7.1,28.3 17,28.3 17,28.3 	"/>
	<polygon class="st0" points="15.3,3 8.4,3 8.3,4.5 15.4,4.5 	"/>
	<polygon class="st0" points="15.5,5.9 8.2,5.9 8.1,7.4 15.6,7.4 	"/>
	<polygon class="st0" points="8.5,1.5 15.2,1.5 15.1,0 8.5,0 	"/>
</g>
    </SvgIcon>
  );
}

class App extends React.Component {
  state = {
    // 0 Screensaver, 1 Aufbau, 2 Daten, 3 Simulation, 4 Anwendungen
    actualState: 0,
    lastState: 0,
    started: false,
    showMenuPartOne: true,
    showMenu: false,
    time: 0,
    // screensaver
    showScreensaverBasic: true,
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
    // variables for content
    leftNormalDistance: distanceFromSide * 7,
    fabColor: "default",

    standardTextClickMeFadeStart: 0.6,
    textClickMeFade: 0.6,
    textClickMeFadeStatus: false,
    open: false,
  };

  componentDidMount() {
    this.clickMeButtonTimer = setInterval(() => this.updateColor(), 30);
  }
  componentWillUnmount() {
    clearInterval(this.clickMeButtonTimer);
  }

  setOpacity() {
    if (this.state.textClickMeFade >= 1) {
      this.setState({ textClickMeFadeStatus: false });
    } else if (this.state.textClickMeFade <= this.state.standardTextClickMeFadeStart) {
      this.setState({ textClickMeFadeStatus: true });
    }
    if (this.state.textClickMeFadeStatus === true) {
      this.setState({ textClickMeFade: this.state.textClickMeFade + 0.01 });
    } else {
      this.setState({ textClickMeFade: this.state.textClickMeFade - 0.01 });
    }
    return "rgba(255,255,255," + this.state.textClickMeFade + ")"
  }

  handleClickShowData = param => e => {
    if (param === "screensaver") {
      this.setState({ actualState: 0 });
    } else if (param === "aufbau") {
      this.setState({ actualState: 1 });
      this._three.handleClickThree(0, 45, -0.01);
      this._three.showWindmill();
    } else if (param === "daten") {
      this.setState({ actualState: 2 });
    } else if (param === "simulation") {
      this.setState({ actualState: 3 });
    } else if (param === "anwendungen") {
      this.setState({ actualState: 4 });
    } else if (param === "showDatenExpert1") {
      console.log("done");
      this.setState({ showDatenExpert1: true });
    } else {
      console.log('dont know what to do with ', param);
    }
    if (this.state.lastState !== this.state.actualState) {
      this.setState({ lastState: this.state.actualState });
      this._three.handleClickThree(0, 90, -0.01);
    }
    switch (this.state.actualState) {
      // screensaver
      case 0:
        this.setState({
          showMenu: true,
          showAnwendungenBasic: false,
          showScreensaverBasic: true,
          showAufbauBasic: false,
          showDatenBasic: false,
          showDatenExpert1: false,
          showDatenExpert2: false,
          showDatenExpert3: false,
          showSimulationBasic: false,
          showSimulationExpert1: false,
          showSimulationExpert2: false,
          showAnwendungenBasic: false,
        });
        break;
      case 1:
        this.setState({
          showMenu: true,
          showAnwendungenBasic: false,
          showScreensaverBasic: false,
          showAufbauBasic: true,
          showDatenBasic: false,
          showDatenExpert1: false,
          showDatenExpert2: false,
          showDatenExpert3: false,
          showSimulationBasic: false,
          showSimulationExpert1: false,
          showSimulationExpert2: false,
          showAnwendungenBasic: false,
        });
        break;
      case 2:
        this.setState({
          showMenu: true,
          showAnwendungenBasic: false,
          showScreensaverBasic: false,
          showAufbauBasic: false,
          showDatenBasic: true,
          showDatenExpert1: false,
          showDatenExpert2: false,
          showDatenExpert3: false,
          showSimulationBasic: false,
          showSimulationExpert1: false,
          showSimulationExpert2: false,
          showAnwendungenBasic: false,
        });
        break;
      case 3:
        this.setState({
          showMenu: true,
          showAnwendungenBasic: false,
          showScreensaverBasic: false,
          showAufbauBasic: false,
          showDatenBasic: false,
          showDatenExpert1: false,
          showDatenExpert2: false,
          showDatenExpert3: false,
          showSimulationBasic: true,
          showSimulationExpert1: false,
          showSimulationExpert2: false,
          showAnwendungenBasic: false,
        });
        break;
      case 4:
        this.setState({
          showMenu: true,
          showAnwendungenBasic: false,
          showScreensaverBasic: false,
          showAufbauBasic: false,
          showDatenBasic: false,
          showDatenExpert1: false,
          showDatenExpert2: false,
          showDatenExpert3: false,
          showSimulationBasic: false,
          showSimulationExpert1: false,
          showSimulationExpert2: false,
          showAnwendungenBasic: true,
        });
        break;
      default:
        break;
    }
  };

  updateColor = () => {
    this.setState(() => ({ show: true, color: this.setOpacity() }))
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { fabColor, showMenuPartOne, textClickMeFade, leftNormalDistance, showMenu, showScreensaverBasic, showAufbauBasic, showDatenBasic, showDatenExpert1, showDatenExpert2, showDatenExpert3, showSimulationBasic, showSimulationExpert1, showSimulationExpert2, showAnwendungenBasic } = this.state;

    return (
      <div className="App">
        <React.Fragment>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
            {/*<div className="MOVEANIMATION">
              <button onClick={this.handleClick} > Toggle </button>
              <Animate start={() => ({ x: 0, })} update={() => ({ x: [this.state.open ? 200 : 0], timing: { duration: 750, ease: easeExpOut }, })} >
                {(state) => {
                  const { x } = state
                  return (
                    <div>
                      <div
                        style={{
                          position: 'absolute', width: 50, height: 50, borderRadius: 4, opacity: 0.7, backgroundColor: '#00cf77', WebkitTransform: `translate3d(${x}px, 0, 0)`, transform: `translate3d(${x}px, 0, 0)`,
                        }} />
                    </div>
                  )
                }}
              </Animate>
            </div>*/}
            <Three ref={(three) => { this._three = three; }} />
            {/* 
            MENU 
            */}
            <Fade in={showMenuPartOne} timeout={{ enter: fadeTimeBasicIn, exit: fadeTimeBasicOut }} mountOnEnter={true} unmountOnExit={true}>
              <div className="firstMenuPoint">
                <Button className='n1' disabled={!showScreensaverBasic} style={{ opacity: [showScreensaverBasic ? textClickMeFade : null], position: 'absolute', right: distanceFromSide * 3 + 10, top: distanceFromSide + 5, fontSize: '20px' }} onClick={this.handleClickShowData('aufbau')} >Aufbau</Button>
                <Fab className={"icon1"} disabled={!showScreensaverBasic} style={{ opacity: [showScreensaverBasic ? textClickMeFade : null], position: 'absolute', right: distanceFromSide, top: distanceFromSide, fontSize: '20px' }} onClick={this.handleClickShowData('aufbau')}>
                  <AufbauIcon className={"aufbau"} color={fabColor} />
                </Fab>
              </div>
            </Fade>
            <Fade in={showMenu} timeout={{ enter: fadeTimeBasicIn, exit: fadeTimeBasicOut }} mountOnEnter={true} unmountOnExit={true}>
              <div className="menu">
                <Button className='n1' disabled={!showAufbauBasic} style={{ opacity: [showAufbauBasic ? textClickMeFade : null], position: 'absolute', right: distanceFromSide * 3 + 10, top: 345, fontSize: '20px' }} onClick={this.handleClickShowData('daten')} >Daten</Button>
                <Fab className={"icon1"} disabled={!showAufbauBasic} style={{ opacity: [showAufbauBasic ? textClickMeFade : null], position: 'absolute', right: distanceFromSide, top: 340, fontSize: '20px' }} onClick={this.handleClickShowData('daten')}>
                  <AufbauIcon className={"daten"} color={fabColor} />
                </Fab>
                <Button className='n1' disabled={!showDatenBasic} style={{ opacity: [showDatenBasic ? textClickMeFade : null], position: 'absolute', right: distanceFromSide * 3 + 10, top: 685, fontSize: '20px' }} onClick={this.handleClickShowData('simulation')} >Simulation</Button>
                <Fab className={"icon1"} disabled={!showDatenBasic} style={{ opacity: [showDatenBasic ? textClickMeFade : null], position: 'absolute', right: distanceFromSide, top: 680, fontSize: '20px' }} onClick={this.handleClickShowData('simulation')}>
                  <AufbauIcon className={"simulation"} color={fabColor} />
                </Fab>
                <Button className='n1' disabled={!showSimulationBasic} style={{ opacity: [showSimulationBasic ? textClickMeFade : null], position: 'absolute', right: distanceFromSide * 3 + 10, bottom: distanceFromSide + 5, fontSize: '20px' }} onClick={this.handleClickShowData('anwendungen')} >Anwendungsgebiete</Button>
                <Fab className={"icon1"} disabled={!showSimulationBasic} style={{ opacity: [showSimulationBasic ? textClickMeFade : null], position: 'absolute', right: distanceFromSide, bottom: distanceFromSide, fontSize: '20px' }} onClick={this.handleClickShowData('anwendungen')}>
                  <AufbauIcon className={"anwendungen"} color={fabColor} />
                </Fab>
              </div>
            </Fade>
            {/* 
            SCREENSAVER 
            */}
            <Fade in={showScreensaverBasic} timeout={{ enter: fadeTimeBasicIn, exit: fadeTimeBasicOut }} mountOnEnter={true} unmountOnExit={true}>
              <div className="aufbauNormal">
                <h1 className='p1' style={h1Style}>Digitaler Zwilling</h1>
                <p className='p1' style={pStyle}>
                  Das Konzept des digitalen Zwillings setzt drei Dinge voraus:<br /><br />
                  Es gibt ein physisches Objekt in
                  der realen Welt, ein virtuelles Objekt in der virtuellen Welt und die Verbindung der beiden durch Daten und Informationen.</p>
              </div>
            </Fade>
            {/* 
            AUFBAU 
            */}
            <Fade in={showAufbauBasic} timeout={{ enter: fadeTimeBasicIn, exit: fadeTimeBasicOut }} mountOnEnter={true} unmountOnExit={true}>
              <div className="aufbauNormal">
                <h2 className='p1' style={h2Style}>Aufbau</h2>
                <p className='p1' style={pStyle}>
                  Zunächst  werden 3D Modelle aller Elemente angefertigt und zusammengefügt.<br /><br />
                  Der digitale Zwilling besitzt die selben strukturellen Charakteristika wie das Windrad der physischen Welt und ist im Idealfall nicht von seinem physischen Gegenstück zu unterscheiden.</p>
              </div>
            </Fade>
            {/* 
            DATEN 
            */}
            <Fade in={showDatenBasic} timeout={{ enter: fadeTimeBasicIn, exit: fadeTimeBasicOut }} mountOnEnter={true} unmountOnExit={true}>
              <div className="aufbauNormal">
                <h2 className='p1' style={h2Style}>Daten</h2>
                <p className='p1' style={pStyle} >
                  Um von einem digitalen Zwilling signifikante Vorteile zu ziehen, müssen der physische und der virtuelle Part miteinander verbunden sein.<br /><br />
                  Das <span style={expertStyleToEnter} onClick={this.handleClickShowData("showDatenExpert1")}>Internet der Dinge</span> ermöglicht es real existierenden Objekten mittels <span style={expertStyleToEnter}>Sensoren</span>
                  Daten zum eigenen, aktuellen Zustand in einer <span style={expertStyleToEnter}>Cloud</span> zu sammeln und weiterzugeben. Diese Informationen fließen in das digitale Modell ein.</p>
              </div>
            </Fade>
            <Fade in={showDatenExpert1} timeout={{ enter: fadeTimeBasicIn, exit: fadeTimeBasicOut }} mountOnEnter={true} unmountOnExit={true}>
              <div className="expertInfo">
                <p className='p1' style={pExpertStyle}>
                  Hier steht Expertenwissen<br /><br />
                  &%$§§?=|!110}</p>
              </div>
            </Fade>
            {/* 
            SIMULATION 
            */}
            <Fade in={showSimulationBasic} timeout={{ enter: fadeTimeBasicIn, exit: fadeTimeBasicOut }} mountOnEnter={true} unmountOnExit={true}>
              <div className="aufbauNormal">
                <h2 className='p1' style={h2Style}>Simulation</h2>
                <p className='p1' style={pStyle}>
                  Das große Potential des digitalen Zwillings besteht darin, dass jeder Zustand eines physischen Produkts  mit dem virtuellen Prozess überlagert und verglichen werden
                  kann. Der finale Schritt besteht deshalb darin, die Informationen des Datenspeichers in eine Simulation des Windrades einzubinden.<br /><br />
                  In dieser Simulation können unterschiedliche Faktoren virtuell ausprobiert und deren Einfluss berechnet werden.
                  + Button "Simulation starten"</p>
              </div>
            </Fade>
            {/* 
            ANWENDUNGSFELDER 
            */}
            <Fade in={showAnwendungenBasic} timeout={{ enter: fadeTimeBasicIn, exit: fadeTimeBasicOut }} mountOnEnter={true} unmountOnExit={true}>
              <div className="aufbauNormal">
                <h2 className='p1' style={h2Style}>Anwendungen</h2>
              </div>
            </Fade>
          </MuiThemeProvider>
        </React.Fragment>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;