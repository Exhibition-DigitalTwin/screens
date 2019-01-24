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
import { easeExpInOut, easeExpOut } from 'd3-ease';
import { range } from 'd3-array';
import Animate from 'react-move/Animate';

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

function getRandomColor() {
  return range(6).reduce((m) => {
    return `${m}${'0123456789ABCDEF'[Math.floor(Math.random() * 16)]}`
  }, '#')
}

class App extends React.Component {
  state = {
    // 0 Screensaver, 1 Aufbau, 2 Daten, 3 Simulation, 4 Anwendungen
    actualState: 0,
    lastState: 0,
    started: false,
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

    color: '#00cf77',
    open: false,
  };

  componentDidMount() {
    this.clickMeButtonTimer = setInterval(() => this.updateColor(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clickMeButtonTimer);
  }

  handleClickShowData = param => e => {
    if (param === "screensaver") {
      this.setState({ actualState: 0 });
      this._three.handleClickThree(0, 45, -0.01);
      this._three.showWindmill();
    } else if (param === "aufbau") {
      this.setState({ actualState: 1 });
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
    this.setState(() => ({ show: true, color: getRandomColor() }))
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { leftNormalDistance, showMenu, showScreensaverBasic, showAufbauBasic, showDatenBasic, showDatenExpert1, showDatenExpert2, showDatenExpert3, showSimulationBasic, showSimulationExpert1, showSimulationExpert2, showAnwendungenBasic } = this.state;
    const { updateColor, state: { color } } = this
    return (
      <div className="App">
        <React.Fragment>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
            <div className="COLORANIMATION">
              <Animate show={true} start={{ opacity: 0, backgroundColor: color, }}
                enter={{ opacity: [1], timing: { duration: 1000, ease: easeExpInOut }, }}
                update={{ opacity: [1], backgroundColor: [color], timing: { duration: 500, ease: easeExpInOut }, }}
                leave={[{ backgroundColor: ['#ff0063'], timing: { duration: 500, ease: easeExpInOut }, },
                { opacity: [0], timing: { delay: 500, duration: 500, ease: easeExpInOut }, },]} >
                {({ opacity, backgroundColor }) => {
                  return (
                    <div style={{ opacity, width: 200, height: 200, marginTop: 10, color: 'white', backgroundColor, }} >
                      {opacity.toFixed(3)}
                    </div>
                  )
                }}</Animate>
            </div>
            <div className="MOVEANIMATION">
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
            </div>
            <Three ref={(three) => { this._three = three; }} />
            {/* 
            MENU 
            */}
            <Fade in={!showMenu} timeout={{ enter: fadeTimeBasicIn, exit: fadeTimeBasicOut }} mountOnEnter={true} unmountOnExit={true}>
              <div className="menu">
                <Button className='n1' disabled={showMenu} style={{ position: 'absolute', right: distanceFromSide, bottom: distanceFromSide * 7 - 40, fontSize: '20px' }} onClick={this.handleClickShowData('screensaver')} >mehr erfahren</Button>
              </div>
            </Fade>
            <Fade in={showMenu} timeout={{ enter: fadeTimeBasicIn, exit: fadeTimeBasicOut }} mountOnEnter={true} unmountOnExit={true}>
              <div className="menu">
                <Button className='n1' disabled={!showScreensaverBasic} style={{ position: 'absolute', right: distanceFromSide, top: distanceFromSide, fontSize: '20px' }} onClick={this.handleClickShowData('aufbau')} >Aufbau</Button>
                <Button className='n1' disabled={!showAufbauBasic} style={{ position: 'absolute', right: distanceFromSide, top: 350, fontSize: '20px' }} onClick={this.handleClickShowData('daten')} >Daten</Button>
                <Button className='n1' disabled={!showDatenBasic} style={{ position: 'absolute', right: distanceFromSide, top: 700, fontSize: '20px' }} onClick={this.handleClickShowData('simulation')} >Simulation</Button>
                <Button className='n1' disabled={!showSimulationBasic} style={{ position: 'absolute', right: distanceFromSide, bottom: distanceFromSide, fontSize: '20px' }} onClick={this.handleClickShowData('anwendungen')} >Anwendungsgebiete</Button>
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
                <h1 className='p1' style={h1Style}>Aufbau</h1>
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
                <h1 className='p1' style={h1Style}>Daten</h1>
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
                <h1 className='p1' style={h1Style}>Simulation</h1>
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
                <h1 className='p1' style={h1Style}>Anwendungen</h1>
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