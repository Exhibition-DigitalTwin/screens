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
import Collapse from '@material-ui/core/Collapse';
import { easeExpOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import SvgIcon from '@material-ui/core/SvgIcon';
import Fab from '@material-ui/core/Fab';
import Websocket from 'react-websocket';
import Slider from '@material-ui/lab/Slider';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: grey[900] }, // #212121
    secondary: { main: deepOrange.A700 }, // #dd2c00
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiSlider: {
      track: { backgroundColor: 'white' },
      thumb: { backgroundColor: 'white' },
    },
  }
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
        <polygon class="st0" points="15.7,8.9 8.1,8.9 7.1,28.3 17,28.3 17,28.3 	" />
        <polygon class="st0" points="15.3,3 8.4,3 8.3,4.5 15.4,4.5 	" />
        <polygon class="st0" points="15.5,5.9 8.2,5.9 8.1,7.4 15.6,7.4 	" />
        <polygon class="st0" points="8.5,1.5 15.2,1.5 15.1,0 8.5,0 	" />
      </g>
    </SvgIcon>
  );
}

function DatenIcon(props) {
  return (
    <SvgIcon {...props}>
      <path id="Pfad_1634" class="st0" d="M0.1,6c0,0.6,0.1,1.2,0.3,1.7c0.2,0.5,0.8,0.8,1.3,0.8c0.4,0,0.7-0.1,1-0.4
	C3.2,7.7,3.4,7,3.4,5.9c0-0.9-0.2-2.5-1.7-2.5C0.1,3.3,0.1,5.2,0.1,6z M0.8,5.9c0-0.9,0.1-2,1-2c0.8,0,1,0.8,1,2c0,0.9-0.1,2-1,2
	C1,7.9,0.8,7.1,0.8,5.9z M5.3,8.4H6v-5H5.4C5,3.7,4.6,4,4.1,4.2v0.7c0.4-0.2,0.8-0.4,1.2-0.7L5.3,8.4z M7.3,6c0,0.6,0.1,1.2,0.3,1.7
	c0.4,0.7,1.3,1,2,0.7c0.1-0.1,0.2-0.1,0.3-0.2c0.5-0.4,0.7-1.1,0.7-2.3c0-0.9-0.2-2.5-1.7-2.5C7.4,3.3,7.3,5.2,7.3,6z M8,5.9
	c0-0.9,0.1-2,1-2c0.8,0,1,0.8,1,2c0,0.9-0.1,2-1,2C8.2,7.9,8,7.1,8,5.9z M12.5,8.4h0.7v-5h-0.6c-0.4,0.3-0.8,0.6-1.2,0.8v0.7
	c0.4-0.2,0.8-0.4,1.2-0.7V8.4z M15.6,8.4h0.7v-5h-0.6c-0.4,0.3-0.8,0.6-1.2,0.8v0.7c0.4-0.2,0.8-0.4,1.2-0.7V8.4z M17.5,6
	c0,0.6,0.1,1.2,0.3,1.7c0.4,0.7,1.3,1,2,0.7c0.1-0.1,0.2-0.1,0.3-0.2c0.5-0.4,0.7-1.1,0.7-2.3c0-0.9-0.2-2.5-1.7-2.5
	C17.6,3.3,17.5,5.2,17.5,6z M18.2,5.9c0-0.9,0.1-2,1-2c0.8,0,1,0.8,1,2c0,0.9-0.1,2-1,2C18.5,7.9,18.2,7.1,18.2,5.9z M21.8,6
	c0,0.6,0.1,1.2,0.3,1.7c0.4,0.7,1.3,1,2,0.7c0.1-0.1,0.2-0.1,0.3-0.2c0.5-0.4,0.7-1.1,0.7-2.3c0-0.9-0.2-2.5-1.7-2.5
	C21.9,3.3,21.8,5.2,21.8,6z M22.5,5.9c0-0.9,0.1-2,1-2c0.8,0,1,0.8,1,2c0,0.9-0.1,2-1,2C22.7,7.9,22.5,7.1,22.5,5.9z M27.1,8.4h0.7
	v-5h-0.6c-0.4,0.3-0.8,0.6-1.2,0.8v0.7c0.4-0.2,0.8-0.4,1.2-0.7V8.4z M6.1,12.1c0,0.6,0.1,1.2,0.3,1.7c0.2,0.5,0.8,0.8,1.3,0.8
	c0.4,0,0.7-0.1,1-0.4c0.5-0.4,0.7-1.1,0.7-2.3c0-0.9-0.2-2.5-1.7-2.5C6.2,9.5,6.1,11.4,6.1,12.1z M6.8,12.1c0-0.9,0.1-2,1-2
	c0.8,0,1,0.8,1,2c0,0.9-0.1,2-1,2C7,14,6.8,13.2,6.8,12.1z M10.4,12.1c0,0.6,0.1,1.2,0.3,1.7c0.4,0.7,1.3,1,2,0.7
	c0.1-0.1,0.2-0.1,0.3-0.2c0.5-0.4,0.7-1.1,0.7-2.3c0-0.9-0.2-2.5-1.7-2.5C10.5,9.5,10.4,11.4,10.4,12.1z M11.1,12.1c0-0.9,0.1-2,1-2
	c0.8,0,1,0.8,1,2c0,0.9-0.1,2-1,2C11.3,14,11.1,13.2,11.1,12.1z M14.7,12.1c0,0.6,0.1,1.2,0.3,1.7c0.4,0.7,1.3,1,2,0.7
	c0.1-0.1,0.2-0.1,0.3-0.2c0.5-0.4,0.7-1.1,0.7-2.3c0-0.9-0.2-2.5-1.7-2.5C14.8,9.5,14.7,11.4,14.7,12.1z M15.4,12.1c0-0.9,0.1-2,1-2
	c0.8,0,1,0.8,1,2c0,0.9-0.1,2-1,2C15.6,14,15.4,13.2,15.4,12.1z M19.9,14.5h0.7v-5H20c-0.4,0.3-0.8,0.6-1.2,0.8v0.7
	c0.4-0.2,0.8-0.4,1.2-0.7V14.5z M23,14.5h0.7v-5H23c-0.4,0.3-0.8,0.6-1.2,0.8v0.7c0.4-0.2,0.8-0.4,1.2-0.7L23,14.5z M24.9,12.1
	c0,0.6,0.1,1.2,0.3,1.7c0.4,0.7,1.3,1,2,0.7c0.1-0.1,0.2-0.1,0.3-0.2c0.5-0.4,0.7-1.1,0.7-2.3c0-0.9-0.2-2.5-1.7-2.5
	C25,9.5,24.9,11.4,24.9,12.1z M25.6,12.1c0-0.9,0.1-2,1-2c0.8,0,1,0.8,1,2c0,0.9-0.1,2-1,2C25.9,14,25.6,13.2,25.6,12.1z M1.2,14.5
	h0.7v-5H1.3c-0.4,0.3-0.8,0.6-1.2,0.8v0.7c0.4-0.2,0.8-0.4,1.2-0.7V14.5z M4.3,14.5h0.7v-5H4.3c-0.4,0.3-0.8,0.6-1.2,0.8v0.7
	c0.4-0.2,0.8-0.4,1.2-0.7L4.3,14.5z M0.1,18.2c0,0.6,0.1,1.2,0.3,1.7c0.2,0.5,0.8,0.8,1.3,0.8c0.4,0,0.7-0.1,1-0.4
	c0.5-0.4,0.7-1.1,0.7-2.3c0-0.9-0.2-2.5-1.7-2.5C0.1,15.6,0.1,17.5,0.1,18.2z M0.8,18.2c0-0.9,0.1-2,1-2c0.8,0,1,0.8,1,2
	c0,0.9-0.1,2-1,2C1,20.2,0.8,19.3,0.8,18.2z M5.3,20.7H6v-5H5.4C5,16,4.6,16.2,4.1,16.5v0.7c0.4-0.2,0.8-0.4,1.2-0.7L5.3,20.7z
	 M8.3,20.7H9v-5H8.4C8,16,7.6,16.2,7.2,16.5v0.7C7.6,17,8,16.7,8.3,16.5L8.3,20.7z M10.3,18.2c0,0.6,0.1,1.2,0.3,1.7
	c0.4,0.7,1.3,1,2,0.7c0.1-0.1,0.2-0.1,0.3-0.2c0.5-0.4,0.7-1.1,0.7-2.3c0-0.9-0.2-2.5-1.7-2.5C10.4,15.6,10.3,17.5,10.3,18.2z
	 M11,18.2c0-0.9,0.1-2,1-2c0.8,0,1,0.8,1,2c0,0.9-0.1,2-1,2C11.2,20.2,11,19.3,11,18.2z M15.6,20.7h0.7v-5h-0.6
	c-0.4,0.3-0.8,0.6-1.2,0.8v0.7c0.4-0.2,0.8-0.4,1.2-0.7V20.7z M17.5,18.2c0,0.6,0.1,1.2,0.3,1.7c0.4,0.7,1.3,1,2,0.7
	c0.1-0.1,0.2-0.1,0.3-0.2c0.5-0.4,0.7-1.1,0.7-2.3c0-0.9-0.2-2.5-1.7-2.5C17.6,15.6,17.5,17.5,17.5,18.2z M18.2,18.2
	c0-0.9,0.1-2,1-2c0.8,0,1,0.8,1,2c0,0.9-0.1,2-1,2C18.5,20.2,18.2,19.3,18.2,18.2z M21.8,18.2c0,0.6,0.1,1.2,0.3,1.7
	c0.4,0.7,1.3,1,2,0.7c0.1-0.1,0.2-0.1,0.3-0.2c0.5-0.4,0.7-1.1,0.7-2.3c0-0.9-0.2-2.5-1.7-2.5C21.9,15.6,21.8,17.5,21.8,18.2z
	 M22.5,18.2c0-0.9,0.1-2,1-2c0.8,0,1,0.8,1,2c0,0.9-0.1,2-1,2C22.7,20.2,22.5,19.3,22.5,18.2z M27.1,20.7h0.7v-5h-0.6
	c-0.4,0.3-0.8,0.6-1.2,0.8v0.7c0.4-0.2,0.8-0.4,1.2-0.7V20.7z"/>
    </SvgIcon>
  );
}

function SimulationIcon(props) {
  return (
    <SvgIcon {...props}>
      <polygon class="st0" points="0,15.3 2.2,17.4 8.2,11.1 10.4,13.5 16,11.6 21.6,15.3 28.3,9.2 26.3,7 21.3,11.6 16.4,8.3 11.3,10 8.2,6.7 "/>
    </SvgIcon>
  );
}

function AnwendungenIcon(props) {
  return (
    <SvgIcon {...props}>
      <g id="der_Gerät" transform="translate(-1778 -911.744)">
	<g id="Pfad_1600" transform="translate(1778 944.014)">
		<path class="st0" d="M7.3-8.3H1.7l0.9-10.5h3.5L7.3-8.3z"/>
		<path class="st1" d="M2.8-18.7L2-8.6H7L5.9-18.7H2.8 M2.4-19.1h3.9L7.5-8.1h-6L2.4-19.1z"/>
	</g>
	<path id="Pfad_1644" class="st0" d="M1789.1,914.4l2.4,2.4l-7.1,7.1l-2.4-2.4L1789.1,914.4z"/>
	<g id="Pfad_1643" transform="translate(1778 933)">
		<path class="st0" d="M4.5-7C2.9-7,1.7-8.2,1.7-9.8s1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7S6-7,4.5-7z"/>
		<path class="st1" d="M4.5-12.3c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5S7-8.4,7-9.8S5.8-12.3,4.5-12.3 M4.5-12.7
			c1.6,0,2.9,1.3,2.9,2.9S6.1-6.8,4.5-6.8S1.5-8.1,1.5-9.8S2.8-12.7,4.5-12.7z"/>
	</g>
	<path id="Pfad_1642" class="st0" d="M1798.5,914.2l0,2.4l-7.2-0.1l0-2.4L1798.5,914.2z"/>
	<g id="Pfad_1641" transform="matrix(0.695, 0.719, -0.719, 0.695, 1804.502, 913.744)">
		<path class="st0" d="M-8.6,12.9c-1,0-1.9-0.9-1.9-1.9s0.9-1.9,1.9-1.9s1.9,0.9,1.9,1.9S-7.6,12.9-8.6,12.9z"/>
		<path class="st1" d="M-8.6,9.3c-0.9,0-1.7,0.8-1.7,1.7s0.8,1.7,1.7,1.7c0.9,0,1.7-0.8,1.7-1.7C-6.9,10-7.7,9.3-8.6,9.3 M-8.6,8.9
			c1.2,0,2.1,0.9,2.1,2.1s-0.9,2.1-2.1,2.1c-1.2,0-2.1-0.9-2.1-2.1S-9.8,8.9-8.6,8.9z"/>
	</g>
	<path id="Pfad_1640" class="st0" d="M1800.6,911.9l0.8,0.8l-3,3l-0.8-0.8L1800.6,911.9z"/>
	<path id="Pfad_1639" class="st0" d="M1801.4,917.9l-0.8,0.8l-3-3l0.8-0.8L1801.4,917.9z"/>
	<path id="Pfad_1638" class="st0" d="M1804.5,914l-0.6,1l-3.7-2.1l0.6-1L1804.5,914z"/>
	<path id="Pfad_1637" class="st0" d="M1804.3,916.4l0.3,1.1l-4.1,1.3l-0.3-1.1L1804.3,916.4z"/>
	<g id="Pfad_1636" transform="matrix(0.695, 0.719, -0.719, 0.695, 1828.502, 911.744)">
		<path class="st0" d="M-18.7,21.1c-0.4,0-0.6-0.3-0.6-0.6s0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6S-18.4,21.1-18.7,21.1z"/>
		<path class="st1" d="M-18.7,20.1c-0.2,0-0.4,0.2-0.4,0.4c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4C-18.3,20.3-18.5,20.1-18.7,20.1
			 M-18.7,19.7c0.5,0,0.8,0.4,0.8,0.8s-0.4,0.8-0.8,0.8c-0.5,0-0.8-0.4-0.8-0.8S-19.2,19.7-18.7,19.7z"/>
	</g>
	<g id="Pfad_1635" transform="matrix(0.695, 0.719, -0.719, 0.695, 1828.502, 924.744)">
		<path class="st0" d="M-24.1,15.9c-0.4,0-0.6-0.3-0.6-0.6c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6
			C-23.5,15.6-23.8,15.9-24.1,15.9z"/>
		<path class="st1" d="M-24.1,14.9c-0.2,0-0.4,0.2-0.4,0.4s0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4S-23.9,14.9-24.1,14.9 M-24.1,14.4
			c0.5,0,0.8,0.4,0.8,0.8s-0.4,0.8-0.8,0.8s-0.8-0.4-0.8-0.8S-24.6,14.4-24.1,14.4z"/>
	</g>
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
    // var for lines between menu points
    showLine1: false,
    showLine2: false,
    showLine3: false,
    lineMenuColor: "#1f1f1f",

    standardTextClickMeFadeStart: 0.6,
    textClickMeFade: 0.6,
    textClickMeFadeStatus: false,
    open: false,

    // Slider
    valueSlider: 10,
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

  handleChangeSlider = (event, valueSlider) => {
    this.setState({ valueSlider });
    this._three.changePositionHead(valueSlider);
  };

  handleClickShowData = param => e => {
    if (param === "screensaver") {
      this.setState({ actualState: 0 });
    } else if (param === "aufbau") {
      this.setState({ actualState: 1 });
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
    if (this.state.lastState !== this.state.actualState && this.state.actualState == 1) {
      this.setState({ lastState: this.state.actualState });
      this._three.handleClickThree(0, 45, -0.01);
    }
    if (this.state.lastState !== this.state.actualState && this.state.actualState !== 1) {
      this.setState({ lastState: this.state.actualState });
      this._three.handleClickThree(0, 90, -0.01);
      this.sendMessage(1);
      this.sendMessage(0);
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
          showLine1: false,
          showLine2: false,
          showLine3: false,
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
          showLine1: true,
          showLine2: false,
          showLine3: false,
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
          showLine1: true,
          showLine2: true,
          showLine3: false,
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
          showLine1: true,
          showLine2: true,
          showLine3: true,
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
          showLine1: true,
          showLine2: true,
          showLine3: true,
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

  handleOpen() {
    console.log("connected");
  };

  handleClose() {
    console.log("disconnected");
  };

  sendMessage(message) {
    this.refWebSocket.sendMessage(message);
  };

  render() {
    const { lineMenuColor, showLine1, showLine2, showLine3,fabColor, showMenuPartOne, textClickMeFade, leftNormalDistance, showMenu, showScreensaverBasic, showAufbauBasic, showDatenBasic, showDatenExpert1, showDatenExpert2, showDatenExpert3, showSimulationBasic, showSimulationExpert1, showSimulationExpert2, showAnwendungenBasic, valueSlider } = this.state;

    return (
      <div className="App">
      <Websocket url='ws://localhost:8080/'
          onOpen={this.handleOpen} onClose={this.handleClose}
          reconnect={true} debug={true}
          ref={Websocket => {
            this.refWebSocket = Websocket;
          }} />
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
                  <AufbauIcon className={"aufbauIcon"} color={fabColor} />
                </Fab>
              </div>
            </Fade>
            <Fade in={showMenu} timeout={{ enter: fadeTimeBasicIn, exit: fadeTimeBasicOut }} mountOnEnter={true} unmountOnExit={true}>
              <div className="menu">
                <Button className='n1' disabled={!showAufbauBasic} style={{ opacity: [showAufbauBasic ? textClickMeFade : null], position: 'absolute', right: distanceFromSide * 3 + 10, top: 355, fontSize: '20px' }} onClick={this.handleClickShowData('daten')} >Daten</Button>
                <Fab className={"icon1"} disabled={!showAufbauBasic} style={{ opacity: [showAufbauBasic ? textClickMeFade : null], position: 'absolute', right: distanceFromSide, top: 350, fontSize: '20px' }} onClick={this.handleClickShowData('daten')}>
                  <DatenIcon className={"datenIcon"} color={fabColor} />
                </Fab>
                <Button className='n1' disabled={!showDatenBasic} style={{ opacity: [showDatenBasic ? textClickMeFade : null], position: 'absolute', right: distanceFromSide * 3 + 10, top: 675, fontSize: '20px' }} onClick={this.handleClickShowData('simulation')} >Simulation</Button>
                <Fab className={"icon1"} disabled={!showDatenBasic} style={{ opacity: [showDatenBasic ? textClickMeFade : null], position: 'absolute', right: distanceFromSide, top: 670, fontSize: '20px' }} onClick={this.handleClickShowData('simulation')}>
                  <SimulationIcon className={"simulationIcon"} color={fabColor} />
                </Fab>
                <Button className='n1' disabled={!showSimulationBasic} style={{ opacity: [showSimulationBasic ? textClickMeFade : null], position: 'absolute', right: distanceFromSide * 3 + 10, bottom: distanceFromSide + 10, fontSize: '20px' }} onClick={this.handleClickShowData('anwendungen')} >Anwendungsgebiete</Button>
                <Fab className={"icon1"} disabled={!showSimulationBasic} style={{ opacity: [showSimulationBasic ? textClickMeFade : null], position: 'absolute', right: distanceFromSide, bottom: distanceFromSide+5, fontSize: '20px' }} onClick={this.handleClickShowData('anwendungen')}>
                  <AnwendungenIcon className={"anwendungenIcon"} color={fabColor} />
                </Fab>
              </div>
            </Fade>    
            {/* 
            LINES BETWEEN MENU POINTS
            */}
            <div className={"line1"} style={{position: 'absolute', right: distanceFromSide + 23, top: 85 }}>
              <Collapse in={showLine1} timeout={{ enter: fadeTimeBasicIn, exit: fadeTimeBasicOut }} mountOnEnter={true} unmountOnExit={true}>
                <div style={{backgroundColor: lineMenuColor, width: "10px", height: "265px" }}>
                </div>
              </Collapse>
            </div>
            <div className={"line2"} style={{position: 'absolute', right: distanceFromSide + 23, top: 405 }}>
              <Collapse in={showLine2} timeout={{ enter: fadeTimeBasicIn, exit: fadeTimeBasicOut }} mountOnEnter={true} unmountOnExit={true}>
                <div style={{backgroundColor: lineMenuColor, width: "10px", height: "265px" }}>
                </div>
              </Collapse>
            </div>
            <div className={"line3"} style={{position: 'absolute', right: distanceFromSide + 23, top: 725 }}>
              <Collapse in={showLine3} timeout={{ enter: fadeTimeBasicIn, exit: fadeTimeBasicOut }} mountOnEnter={true} unmountOnExit={true}>
                <div style={{backgroundColor: lineMenuColor, width: "10px", height: "265px" }}>
                </div>
              </Collapse>
            </div>
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
              <div style={{ position: "absolute", top: "600px", left: "1000px", height: "200px"}}>
              <Slider value={valueSlider} onChange={this.handleChangeSlider} style={{padding: '22px 0px'}} vertical/>
              </div>
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