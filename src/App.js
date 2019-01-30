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
const ledSize = 20;
const ledDistance = 55;
const ledDistanceAngleSide = 37;
const ledDistanceStartTop = 22;
const ledColorOn = '#FFFFFF';
const ledColorOff = '#191919';
const ledShadowOn = ledSize*1.5;
const ledShadowOff = 0;
const ledOpacityOn = 1;
const ledOpacityOnToOff = 0.5;
const ledOpacityOff = 0.2;

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
  opacity: '1',
};

const expertStyleToEnter = {
  fontWeight: 'bold',
  opacity: '1',
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
    showDisableExpertDiv: false,
    contentFadedOut: false,

    // var for lines between menu points
    showLine1: false,
    showLine2: false,
    showLine3: false,
    lineMenuColor: "#1f1f1f",

    standardTextClickMeFadeStart: 0.4,
    textClickMeFade: 0.4,
    textClickMeFadeStatus: false,
    open: false,
    contentOpacity: 0.5,

    // Slider
    valueSlider: 0,

    // LEDs
    currentLedOn: 0,
    showLEDs: true,
    ledsMoving: 0, // 0 off, 1 up, 2 down
    ledColor1: '#191919',
    ledColor2: '#191919',
    ledColor3: '#191919',
    ledColor4: '#191919',
    ledColor5: '#191919',
    ledColor6: '#191919',
    ledColor7: '#191919',
    ledColor8: '#191919',
    ledColor9: '#191919',
    ledColor10: '#191919',
    ledColor11: '#191919',
    ledColor12: '#191919',
    ledColor13: '#191919',
    ledColor14: '#191919',
    ledColor15: '#191919',
    ledColor16: '#191919',
    ledColor17: '#191919',
    ledColor18: '#191919',
    ledColor19: '#191919',
    ledColor20: '#191919',
    ledShadowSize1: 0,
    ledShadowSize2: 0,
    ledShadowSize3: 0,
    ledShadowSize4: 0,
    ledShadowSize5: 0,
    ledShadowSize6: 0,
    ledShadowSize7: 0,
    ledShadowSize8: 0,
    ledShadowSize9: 0,
    ledShadowSize10: 0,
    ledShadowSize11: 0,
    ledShadowSize12: 0,
    ledShadowSize13: 0,
    ledShadowSize14: 0,
    ledShadowSize15: 0,
    ledShadowSize16: 0,
    ledShadowSize17: 0,
    ledShadowSize18: 0,
    ledShadowSize19: 0,
    ledShadowSize20: 0,
    ledOpacity1: 1,
    ledOpacity2: 1,
    ledOpacity3: 1,
    ledOpacity4: 1,
    ledOpacity5: 1,
    ledOpacity6: 1,
    ledOpacity7: 1,
    ledOpacity8: 1,
    ledOpacity9: 1,
    ledOpacity10: 1,
    ledOpacity11: 1,
    ledOpacity12: 1,
    ledOpacity13: 1,
    ledOpacity14: 1,
    ledOpacity15: 1,
    ledOpacity16: 1,
    ledOpacity17: 1,
    ledOpacity18: 1,
    ledOpacity19: 1,
    ledOpacity20: 1,
  };

  componentDidMount() {
    this.marcus = 0;
    this.clickMeButtonTimer = setInterval(() => this.updateColor(), 30);
    this.clickMeButtonTimer = setInterval(() => this.setContentOpacity(), 30);
    this.clickMeButtonTimer = setInterval(() => this.runLedStrip(), 700);
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

  setContentOpacity() {
    if(this.state.showDisableExpertDiv && this.state.contentOpacity >= 0.2 && !this.state.contentFadedOut) {
      this.setState({ contentOpacity: this.state.contentOpacity - 0.015 });
    } else if (this.state.contentOpacity <= 0.2 && this.state.showDisableExpertDiv) {
      this.setState({ contentFadedOut: true });
    } else {
      this.setState({ contentOpacity: this.state.contentOpacity + 0.03 });
      if (this.state.contentOpacity >= 1) {
        this.setState({ contentOpacity: 1, contentFadedOut: false });
      }
    }
  }

  handleChangeSlider = (event, valueSlider) => {
    this.setState({ valueSlider });
    this._three.changePositionHead(valueSlider);
  };

  handleClickShowData = param => e => {
    if (param === "screensaver") {
      this.setState({ actualState: 0 }, () => this.callback());
    } else if (param === "aufbau") {
      this.setState({ actualState: 1 }, () => this.callback());
      this._three.showWindmill();
      this.runLedStrip();
    } else if (param === "daten") {
      this._three.resetPosition();
      this.setState({ actualState: 2 }, () => this.callback());
    } else if (param === "simulation") {
      this.setState({ actualState: 3 }, () => this.callback());
    } else if (param === "anwendungen") {
      this._three.deleteModel();
      this._three.moveCamera(-29, 15, 500);
      this.setState({ actualState: 4 }, () => this.callback());
    } else if (param === "showDatenExpert1") {
      console.log("done");
      this.setState({ showDatenExpert1: true, showDisableExpertDiv: true, contentFadedOut: false });
    }else if (param === "closeDatenExpert") {
      this.setState({
        showDatenExpert1: false,
        showDatenExpert2: false,
        showDatenExpert3: false,
        showSimulationBasic: false,
        showSimulationExpert1: false,
        showSimulationExpert2: false,
        showDisableExpertDiv: false,
        contentOpacity: 1,
       }, () => this.callback());
    } 
  };

  callback(){
    if (this.state.lastState !== this.state.actualState && this.state.actualState === 1) {
      this.setState({ lastState: this.state.actualState });
      this._three.rotateHeadRootModel(0, 45, -0.01);
    }
    if (this.state.lastState !== this.state.actualState && this.state.actualState !== 1) {
      this.setState({ 
        lastState: this.state.actualState,
        showDatenExpert1: false,
        showDatenExpert2: false,
        showDatenExpert3: false,
        showSimulationBasic: false,
        showSimulationExpert1: false,
        showSimulationExpert2: false, 
        showDisableExpertDiv: false,
      });
      this._three.rotateHeadRootModel(0, 90, -0.01);
      this.sendMessage(1);
      this.sendMessage(0);
    }
    switch (this.state.actualState) {
      // screensaver
      case 0:
        this.setState({
          showMenu: true,
          showScreensaverBasic: true,
          showAufbauBasic: false,
          showDatenBasic: false,
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
          showScreensaverBasic: false,
          showAufbauBasic: true,
          showDatenBasic: false,
          showSimulationBasic: false,
          showSimulationExpert1: false,
          showSimulationExpert2: false,
          showAnwendungenBasic: false,
          showLine1: false,
          showLine2: false,
          showLine3: false,
        });
        break;
      case 2:
        this.setState({
          showMenu: true,
          showScreensaverBasic: false,
          showAufbauBasic: false,
          showDatenBasic: true,
          showSimulationBasic: false,
          showSimulationExpert1: false,
          showSimulationExpert2: false,
          showAnwendungenBasic: false,
          showLine1: true,
          showLine2: false,
          showLine3: false,
        });
        break;
      case 3:
        this.setState({
          showMenu: true,
          showScreensaverBasic: false,
          showAufbauBasic: false,
          showDatenBasic: false,
          showSimulationBasic: true,
          showSimulationExpert1: false,
          showSimulationExpert2: false,
          showAnwendungenBasic: false,
          showLine1: true,
          showLine2: true,
          showLine3: false,
        });
        break;
      case 4:
        this.setState({
          showMenu: true,
          showScreensaverBasic: false,
          showAufbauBasic: false,
          showDatenBasic: false,
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

  runLedStrip = () => {
    if (this.state.ledsMoving === 1) { // up
      switch(this.state.currentLedOn)
      {
        case 0: this.setState({ ledColor20: ledColorOn, ledShadowSize20: ledShadowOn, ledOpacity20: ledOpacityOn, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 1: this.setState({ ledColor19: ledColorOn, ledShadowSize19: ledShadowOn, ledOpacity19: ledOpacityOn, ledColor20: ledColorOn, ledShadowSize20: ledShadowOn, ledOpacity20: ledOpacityOnToOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 2: this.setState({ ledColor18: ledColorOn, ledShadowSize18: ledShadowOn, ledOpacity18: ledOpacityOn, ledColor19: ledColorOn, ledShadowSize19: ledShadowOn, ledOpacity19: ledOpacityOnToOff, ledColor20: ledColorOff, ledShadowSize20: ledShadowOff, ledOpacity20: ledOpacityOnToOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 3: this.setState({ ledColor17: ledColorOn, ledShadowSize17: ledShadowOn, ledOpacity17: ledOpacityOn, ledColor18: ledColorOn, ledShadowSize18: ledShadowOn, ledOpacity18: ledOpacityOnToOff, ledColor19: ledColorOff, ledShadowSize19: ledShadowOff, ledOpacity19: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 4: this.setState({ ledColor16: ledColorOn, ledShadowSize16: ledShadowOn, ledOpacity16: ledOpacityOn, ledColor17: ledColorOn, ledShadowSize17: ledShadowOn, ledOpacity17: ledOpacityOnToOff, ledColor18: ledColorOff, ledShadowSize18: ledShadowOff, ledOpacity18: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 5: this.setState({ ledColor15: ledColorOn, ledShadowSize15: ledShadowOn, ledOpacity15: ledOpacityOn, ledColor16: ledColorOn, ledShadowSize16: ledShadowOn, ledOpacity16: ledOpacityOnToOff, ledColor17: ledColorOff, ledShadowSize17: ledShadowOff, ledOpacity17: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 6: this.setState({ ledColor14: ledColorOn, ledShadowSize14: ledShadowOn, ledOpacity14: ledOpacityOn, ledColor15: ledColorOn, ledShadowSize15: ledShadowOn, ledOpacity15: ledOpacityOnToOff, ledColor16: ledColorOff, ledShadowSize16: ledShadowOff, ledOpacity16: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 7: this.setState({ ledColor13: ledColorOn, ledShadowSize13: ledShadowOn, ledOpacity13: ledOpacityOn, ledColor14: ledColorOn, ledShadowSize14: ledShadowOn, ledOpacity14: ledOpacityOnToOff, ledColor15: ledColorOff, ledShadowSize15: ledShadowOff, ledOpacity15: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 8: this.setState({ ledColor12: ledColorOn, ledShadowSize12: ledShadowOn, ledOpacity12: ledOpacityOn, ledColor13: ledColorOn, ledShadowSize13: ledShadowOn, ledOpacity13: ledOpacityOnToOff, ledColor14: ledColorOff, ledShadowSize14: ledShadowOff, ledOpacity14: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 9: this.setState({ ledColor11: ledColorOn, ledShadowSize11: ledShadowOn, ledOpacity11: ledOpacityOn, ledColor12: ledColorOn, ledShadowSize12: ledShadowOn, ledOpacity12: ledOpacityOnToOff, ledColor13: ledColorOff, ledShadowSize13: ledShadowOff, ledOpacity13: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 10: this.setState({ ledColor10: ledColorOn, ledShadowSize10: ledShadowOn, ledOpacity10: ledOpacityOn, ledColor11: ledColorOn, ledShadowSize11: ledShadowOn, ledOpacity11: ledOpacityOnToOff, ledColor12: ledColorOff, ledShadowSize12: ledShadowOff, ledOpacity12: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 11: this.setState({ ledColor9: ledColorOn, ledShadowSize9: ledShadowOn, ledOpacity9: ledOpacityOn, ledColor10: ledColorOn, ledShadowSize10: ledShadowOn, ledOpacity10: ledOpacityOnToOff, ledColor11: ledColorOff, ledShadowSize11: ledShadowOff, ledOpacity11: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 12: this.setState({ ledColor8: ledColorOn, ledShadowSize8: ledShadowOn, ledOpacity8: ledOpacityOn, ledColor9: ledColorOn, ledShadowSize9: ledShadowOn, ledOpacity9: ledOpacityOnToOff, ledColor10: ledColorOff, ledShadowSize10: ledShadowOff, ledOpacity10: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 13: this.setState({ ledColor7: ledColorOn, ledShadowSize7: ledShadowOn, ledOpacity7: ledOpacityOn, ledColor8: ledColorOn, ledShadowSize8: ledShadowOn, ledOpacity8: ledOpacityOnToOff, ledColor9: ledColorOff, ledShadowSize9: ledShadowOff, ledOpacity9: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 14: this.setState({ ledColor6: ledColorOn, ledShadowSize6: ledShadowOn, ledOpacity6: ledOpacityOn, ledColor7: ledColorOn, ledShadowSize7: ledShadowOn, ledOpacity7: ledOpacityOnToOff, ledColor8: ledColorOff, ledShadowSize8: ledShadowOff, ledOpacity8: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 15: this.setState({ ledColor5: ledColorOn, ledShadowSize5: ledShadowOn, ledOpacity5: ledOpacityOn, ledColor6: ledColorOn, ledShadowSize6: ledShadowOn, ledOpacity6: ledOpacityOnToOff, ledColor7: ledColorOff, ledShadowSize7: ledShadowOff, ledOpacity7: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 16: this.setState({ ledColor4: ledColorOn, ledShadowSize4: ledShadowOn, ledOpacity4: ledOpacityOn, ledColor5: ledColorOn, ledShadowSize5: ledShadowOn, ledOpacity5: ledOpacityOnToOff, ledColor6: ledColorOff, ledShadowSize6: ledShadowOff, ledOpacity6: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 17: this.setState({ ledColor3: ledColorOn, ledShadowSize3: ledShadowOn, ledOpacity3: ledOpacityOn, ledColor4: ledColorOn, ledShadowSize4: ledShadowOn, ledOpacity4: ledOpacityOnToOff, ledColor5: ledColorOff, ledShadowSize5: ledShadowOff, ledOpacity5: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 18: this.setState({ ledColor2: ledColorOn, ledShadowSize2: ledShadowOn, ledOpacity2: ledOpacityOn, ledColor3: ledColorOn, ledShadowSize3: ledShadowOn, ledOpacity3: ledOpacityOnToOff, ledColor4: ledColorOff, ledShadowSize4: ledShadowOff, ledOpacity4: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 19: this.setState({ ledColor1: ledColorOn, ledShadowSize1: ledShadowOn, ledOpacity1: ledOpacityOn, ledColor2: ledColorOn, ledShadowSize2: ledShadowOn, ledOpacity2: ledOpacityOnToOff, ledColor3: ledColorOff, ledShadowSize3: ledShadowOff, ledOpacity3: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 20: this.setState({ ledColor1: ledColorOn, ledShadowSize1: ledShadowOn, ledOpacity1: ledOpacityOnToOff, ledColor2: ledColorOff, ledShadowSize2: ledShadowOff, ledOpacity2: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 21: this.setState({ ledColor1: ledColorOff, ledShadowSize1: ledShadowOff, ledOpacity1: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        default: this.setState({ ledsMoving: 0 }, () => this.callback()); break;
      }
    }else if (this.state.ledsMoving === 2) { // down
      switch(this.state.currentLedOn)
      {
        case 0: this.setState({ ledColor1: ledColorOn, ledShadowSize1: ledShadowOn, ledOpacity1: ledOpacityOn, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 1: this.setState({ ledColor2: ledColorOn, ledShadowSize2: ledShadowOn, ledOpacity2: ledOpacityOn, ledColor1: ledColorOn, ledShadowSize1: ledShadowOn, ledOpacity1: ledOpacityOnToOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 2: this.setState({ ledColor3: ledColorOn, ledShadowSize3: ledShadowOn, ledOpacity3: ledOpacityOn, ledColor2: ledColorOn, ledShadowSize2: ledShadowOn, ledOpacity2: ledOpacityOnToOff, ledColor1: ledColorOff, ledShadowSize1: ledShadowOff, ledOpacity1: ledOpacityOnToOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 3: this.setState({ ledColor4: ledColorOn, ledShadowSize4: ledShadowOn, ledOpacity4: ledOpacityOn, ledColor3: ledColorOn, ledShadowSize3: ledShadowOn, ledOpacity3: ledOpacityOnToOff, ledColor2: ledColorOff, ledShadowSize2: ledShadowOff, ledOpacity2: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 4: this.setState({ ledColor5: ledColorOn, ledShadowSize5: ledShadowOn, ledOpacity5: ledOpacityOn, ledColor4: ledColorOn, ledShadowSize4: ledShadowOn, ledOpacity4: ledOpacityOnToOff, ledColor3: ledColorOff, ledShadowSize3: ledShadowOff, ledOpacity3: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 5: this.setState({ ledColor6: ledColorOn, ledShadowSize6: ledShadowOn, ledOpacity6: ledOpacityOn, ledColor5: ledColorOn, ledShadowSize5: ledShadowOn, ledOpacity5: ledOpacityOnToOff, ledColor4: ledColorOff, ledShadowSize4: ledShadowOff, ledOpacity4: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 6: this.setState({ ledColor7: ledColorOn, ledShadowSize7: ledShadowOn, ledOpacity7: ledOpacityOn, ledColor6: ledColorOn, ledShadowSize6: ledShadowOn, ledOpacity6: ledOpacityOnToOff, ledColor5: ledColorOff, ledShadowSize5: ledShadowOff, ledOpacity5: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 7: this.setState({ ledColor8: ledColorOn, ledShadowSize8: ledShadowOn, ledOpacity8: ledOpacityOn, ledColor7: ledColorOn, ledShadowSize7: ledShadowOn, ledOpacity7: ledOpacityOnToOff, ledColor6: ledColorOff, ledShadowSize6: ledShadowOff, ledOpacity6: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 8: this.setState({ ledColor9: ledColorOn, ledShadowSize9: ledShadowOn, ledOpacity9: ledOpacityOn, ledColor8: ledColorOn, ledShadowSize8: ledShadowOn, ledOpacity8: ledOpacityOnToOff, ledColor7: ledColorOff, ledShadowSize7: ledShadowOff, ledOpacity7: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 9: this.setState({ ledColor10: ledColorOn, ledShadowSize10: ledShadowOn, ledOpacity10: ledOpacityOn, ledColor9: ledColorOn, ledShadowSize9: ledShadowOn, ledOpacity9: ledOpacityOnToOff, ledColor8: ledColorOff, ledShadowSize8: ledShadowOff, ledOpacity8: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 10: this.setState({ ledColor11: ledColorOn, ledShadowSize11: ledShadowOn, ledOpacity11: ledOpacityOn, ledColor10: ledColorOn, ledShadowSize10: ledShadowOn, ledOpacity10: ledOpacityOnToOff, ledColor9: ledColorOff, ledShadowSize9: ledShadowOff, ledOpacity9: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 11: this.setState({ ledColor12: ledColorOn, ledShadowSize12: ledShadowOn, ledOpacity12: ledOpacityOn, ledColor11: ledColorOn, ledShadowSize11: ledShadowOn, ledOpacity11: ledOpacityOnToOff, ledColor10: ledColorOff, ledShadowSize10: ledShadowOff, ledOpacity10: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 12: this.setState({ ledColor13: ledColorOn, ledShadowSize13: ledShadowOn, ledOpacity13: ledOpacityOn, ledColor12: ledColorOn, ledShadowSize12: ledShadowOn, ledOpacity12: ledOpacityOnToOff, ledColor11: ledColorOff, ledShadowSize11: ledShadowOff, ledOpacity11: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 13: this.setState({ ledColor14: ledColorOn, ledShadowSize14: ledShadowOn, ledOpacity14: ledOpacityOn, ledColor13: ledColorOn, ledShadowSize13: ledShadowOn, ledOpacity13: ledOpacityOnToOff, ledColor12: ledColorOff, ledShadowSize12: ledShadowOff, ledOpacity12: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 14: this.setState({ ledColor15: ledColorOn, ledShadowSize15: ledShadowOn, ledOpacity15: ledOpacityOn, ledColor14: ledColorOn, ledShadowSize14: ledShadowOn, ledOpacity14: ledOpacityOnToOff, ledColor13: ledColorOff, ledShadowSize13: ledShadowOff, ledOpacity13: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 15: this.setState({ ledColor16: ledColorOn, ledShadowSize16: ledShadowOn, ledOpacity16: ledOpacityOn, ledColor15: ledColorOn, ledShadowSize15: ledShadowOn, ledOpacity15: ledOpacityOnToOff, ledColor14: ledColorOff, ledShadowSize14: ledShadowOff, ledOpacity14: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 16: this.setState({ ledColor17: ledColorOn, ledShadowSize17: ledShadowOn, ledOpacity17: ledOpacityOn, ledColor16: ledColorOn, ledShadowSize16: ledShadowOn, ledOpacity16: ledOpacityOnToOff, ledColor15: ledColorOff, ledShadowSize15: ledShadowOff, ledOpacity15: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 17: this.setState({ ledColor18: ledColorOn, ledShadowSize18: ledShadowOn, ledOpacity18: ledOpacityOn, ledColor17: ledColorOn, ledShadowSize17: ledShadowOn, ledOpacity17: ledOpacityOnToOff, ledColor16: ledColorOff, ledShadowSize16: ledShadowOff, ledOpacity16: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 18: this.setState({ ledColor19: ledColorOn, ledShadowSize19: ledShadowOn, ledOpacity19: ledOpacityOn, ledColor18: ledColorOn, ledShadowSize18: ledShadowOn, ledOpacity18: ledOpacityOnToOff, ledColor17: ledColorOff, ledShadowSize17: ledShadowOff, ledOpacity17: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 19: this.setState({ ledColor20: ledColorOn, ledShadowSize20: ledShadowOn, ledOpacity20: ledOpacityOn, ledColor19: ledColorOn, ledShadowSize19: ledShadowOn, ledOpacity19: ledOpacityOnToOff, ledColor18: ledColorOff, ledShadowSize18: ledShadowOff, ledOpacity18: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 20: this.setState({ ledColor20: ledColorOn, ledShadowSize20: ledShadowOn, ledOpacity20: ledOpacityOnToOff, ledColor19: ledColorOff, ledShadowSize19: ledShadowOff, ledOpacity19: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        case 21: this.setState({ ledColor20: ledColorOff, ledShadowSize20: ledShadowOff, ledOpacity20: ledOpacityOff, currentLedOn: this.state.currentLedOn +=1 }, () => this.callback()); break;
        default: this.setState({ ledsMoving: 0 }, () => this.callback()); break;
      }
    } else {
      this.setState({ 
        ledColor1: ledColorOff, ledColor2: ledColorOff, ledColor3: ledColorOff, ledColor4: ledColorOff, ledColor5: ledColorOff, ledColor6: ledColorOff, ledColor7: ledColorOff, ledColor8: ledColorOff, ledColor9: ledColorOff, ledColor10: ledColorOff, ledColor11: ledColorOff, ledColor12: ledColorOff, ledColor13: ledColorOff, ledColor14: ledColorOff, ledColor15: ledColorOff, ledColor16: ledColorOff, ledColor17: ledColorOff, ledColor18: ledColorOff, ledColor19: ledColorOff, ledColor20: ledColorOff, 
        ledShadowSize1: ledShadowOff, ledShadowSize2: ledShadowOff, ledShadowSize3: ledShadowOff, ledShadowSize4: ledShadowOff, ledShadowSize5: ledShadowOff, ledShadowSize6: ledShadowOff, ledShadowSize7: ledShadowOff, ledShadowSize8: ledShadowOff, ledShadowSize9: ledShadowOff, ledShadowSize10: ledShadowOff, ledShadowSize11: ledShadowOff, ledShadowSize12: ledShadowOff, ledShadowSize13: ledShadowOff, ledShadowSize14: ledShadowOff, ledShadowSize15: ledShadowOff, ledShadowSize16: ledShadowOff, ledShadowSize17: ledShadowOff, ledShadowSize18: ledShadowOff, ledShadowSize19: ledShadowOff, ledShadowSize20: ledShadowOff, 
        ledOpacity1: ledOpacityOff, ledOpacity2: ledOpacityOff, ledOpacity3: ledOpacityOff, ledOpacity4: ledOpacityOff, ledOpacity5: ledOpacityOff, ledOpacity6: ledOpacityOff, ledOpacity7: ledOpacityOff, ledOpacity8: ledOpacityOff, ledOpacity9: ledOpacityOff, ledOpacity10: ledOpacityOff, ledOpacity11: ledOpacityOff, ledOpacity12: ledOpacityOff, ledOpacity13: ledOpacityOff, ledOpacity14: ledOpacityOff, ledOpacity15: ledOpacityOff, ledOpacity16: ledOpacityOff, ledOpacity17: ledOpacityOff, ledOpacity18: ledOpacityOff, ledOpacity19: ledOpacityOff, ledOpacity20: ledOpacityOff, 
        currentLedOn: 0 }, () => this.callback());
    }
  }

  updateColor = () => {
    this.setState(() => ({ show: true, color: this.setOpacity() }))
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  handleShowDisableExpertDiv = () => {
    this.setState({ 
      showDisableExpertDiv: false,
      showDatenExpert1: false,
      showDatenExpert2: false,
      showDatenExpert3: false,
      showSimulationBasic: false,
      showSimulationExpert1: false,
      showSimulationExpert2: false, 
    })
  }

  handleOpen() {
    console.log("ws connected");
  };

  handleClose() {
    console.log("ws disconnected");
  };

  sendMessage(message) {
    this.refWebSocket.sendMessage(message);
  };

  render() {
    const { ledOpacity1, ledOpacity2, ledOpacity3, ledOpacity4, ledOpacity5, ledOpacity6, ledOpacity7, ledOpacity8, ledOpacity9, ledOpacity10, ledOpacity11, ledOpacity12, ledOpacity13, ledOpacity14, ledOpacity15, ledOpacity16, ledOpacity17, ledOpacity18, ledOpacity19, ledOpacity20, ledShadowSize1, ledShadowSize2, ledShadowSize3, ledShadowSize4, ledShadowSize5, ledShadowSize6, ledShadowSize7, ledShadowSize8, ledShadowSize9, ledShadowSize10, ledShadowSize11, ledShadowSize12, ledShadowSize13, ledShadowSize14, ledShadowSize15, ledShadowSize16, ledShadowSize17, ledShadowSize18, ledShadowSize19, ledShadowSize20, ledColor20, ledColor19, ledColor18, ledColor17, ledColor16, ledColor15, ledColor14, ledColor13, ledColor12, ledColor11, ledColor10, ledColor9, ledColor8, ledColor7, ledColor6, ledColor5, ledColor4, ledColor3, ledColor2, ledColor1, showLEDs, contentOpacity, showDisableExpertDiv, lineMenuColor, showLine1, showLine2, showLine3,fabColor, showMenuPartOne, textClickMeFade, leftNormalDistance, showMenu, showScreensaverBasic, showAufbauBasic, showDatenBasic, showDatenExpert1, showDatenExpert2, showDatenExpert3, showSimulationBasic, showSimulationExpert1, showSimulationExpert2, showAnwendungenBasic, valueSlider } = this.state;

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
                <Button className='n1' disabled={!showSimulationBasic} style={{ opacity: [showSimulationBasic ? textClickMeFade : null], position: 'absolute', right: distanceFromSide * 3 + 10, bottom: distanceFromSide + 10, fontSize: '20px' }} onClick={this.handleClickShowData('anwendungen')} >Anwendungen</Button>
                <Fab className={"icon1"} disabled={!showSimulationBasic} style={{ opacity: [showSimulationBasic ? textClickMeFade : null], position: 'absolute', right: distanceFromSide, bottom: distanceFromSide+5, fontSize: '20px' }} onClick={this.handleClickShowData('anwendungen')}>
                  <AnwendungenIcon className={"anwendungenIcon"} color={fabColor} />
                </Fab>
              </div>
            </Fade>
            {/* 
            LEDs
            */}
            <Fade in={showLEDs} timeout={{ enter: fadeTimeBasicIn, exit: fadeTimeBasicOut }} mountOnEnter={true} unmountOnExit={true}>
              <div className={"ledStrip"}>
                <div id={"led1"} style={{ backgroundColor: ledColor1, opacity: ledOpacity1, boxShadow: '0px 0px '+ledShadowSize1+'px' + ledColor1, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2, top: ledDistanceStartTop }}></div>
                <div id={"led2"} style={{ backgroundColor: ledColor2, opacity: ledOpacity2, boxShadow: '0px 0px '+ledShadowSize2+'px' + ledColor2, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2, top: ledDistanceStartTop+ledDistance }}></div>
                <div id={"led3"} style={{ backgroundColor: ledColor3, opacity: ledOpacity3, boxShadow: '0px 0px '+ledShadowSize3+'px' + ledColor3, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2, top: ledDistanceStartTop+ledDistance*2 }}></div>
                <div id={"led4"} style={{ backgroundColor: ledColor4, opacity: ledOpacity4, boxShadow: '0px 0px '+ledShadowSize4+'px' + ledColor4, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2, top: ledDistanceStartTop+ledDistance*3 }}></div>
                <div id={"led5"} style={{ backgroundColor: ledColor5, opacity: ledOpacity5, boxShadow: '0px 0px '+ledShadowSize5+'px' + ledColor5, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2, top: ledDistanceStartTop+ledDistance*4 }}></div>
                <div id={"led6"} style={{ backgroundColor: ledColor6, opacity: ledOpacity6, boxShadow: '0px 0px '+ledShadowSize6+'px' + ledColor6, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2, top: ledDistanceStartTop+ledDistance*5 }}></div>
                <div id={"led7"} style={{ backgroundColor: ledColor7, opacity: ledOpacity7, boxShadow: '0px 0px '+ledShadowSize7+'px' + ledColor7, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2, top: ledDistanceStartTop+ledDistance*6 }}></div>
                <div id={"led8"} style={{ backgroundColor: ledColor8, opacity: ledOpacity8, boxShadow: '0px 0px '+ledShadowSize8+'px' + ledColor8, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2, top: ledDistanceStartTop+ledDistance*7 }}></div>
                <div id={"led9"} style={{ backgroundColor: ledColor9, opacity: ledOpacity9, boxShadow: '0px 0px '+ledShadowSize9+'px' + ledColor9, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2, top: ledDistanceStartTop+ledDistance*8 }}></div>
                <div id={"led10"} style={{ backgroundColor: ledColor10, opacity: ledOpacity10, boxShadow: '0px 0px '+ledShadowSize10+'px' + ledColor10, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2, top: ledDistanceStartTop+ledDistance*9 }}></div>
                <div id={"led11"} style={{ backgroundColor: ledColor11, opacity: ledOpacity11, boxShadow: '0px 0px '+ledShadowSize11+'px' + ledColor11, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2, top: ledDistanceStartTop+ledDistance*10 }}></div>
                <div id={"led12"} style={{ backgroundColor: ledColor12, opacity: ledOpacity12, boxShadow: '0px 0px '+ledShadowSize12+'px' + ledColor12, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2, top: ledDistanceStartTop+ledDistance*11 }}></div>
                <div id={"led13"} style={{ backgroundColor: ledColor13, opacity: ledOpacity13, boxShadow: '0px 0px '+ledShadowSize13+'px' + ledColor13, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2+ledDistanceAngleSide, top: ledDistanceStartTop+ledDistance*11+ledDistanceAngleSide }}></div>
                <div id={"led14"} style={{ backgroundColor: ledColor14, opacity: ledOpacity14, boxShadow: '0px 0px '+ledShadowSize14+'px' + ledColor14, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2+ledDistanceAngleSide*2, top: ledDistanceStartTop+ledDistance*11+ledDistanceAngleSide*2 }}></div>
                <div id={"led15"} style={{ backgroundColor: ledColor15, opacity: ledOpacity15, boxShadow: '0px 0px '+ledShadowSize15+'px' + ledColor15, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2+ledDistanceAngleSide*3, top: ledDistanceStartTop+ledDistance*11+ledDistanceAngleSide*3 }}></div>
                <div id={"led16"} style={{ backgroundColor: ledColor16, opacity: ledOpacity16, boxShadow: '0px 0px '+ledShadowSize16+'px' + ledColor16, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2+ledDistanceAngleSide*4, top: ledDistanceStartTop+ledDistance*11+ledDistanceAngleSide*4 }}></div>
                <div id={"led17"} style={{ backgroundColor: ledColor17, opacity: ledOpacity17, boxShadow: '0px 0px '+ledShadowSize17+'px' + ledColor17, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2+ledDistanceAngleSide*5, top: ledDistanceStartTop+ledDistance*11+ledDistanceAngleSide*5 }}></div>
                <div id={"led18"} style={{ backgroundColor: ledColor18, opacity: ledOpacity18, boxShadow: '0px 0px '+ledShadowSize18+'px' + ledColor18, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2+ledDistanceAngleSide*6, top: ledDistanceStartTop+ledDistance*11+ledDistanceAngleSide*6 }}></div>
                <div id={"led19"} style={{ backgroundColor: ledColor19, opacity: ledOpacity19, boxShadow: '0px 0px '+ledShadowSize19+'px' + ledColor19, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2+ledDistanceAngleSide*7, top: ledDistanceStartTop+ledDistance*11+ledDistanceAngleSide*7 }}></div>
                <div id={"led20"} style={{ backgroundColor: ledColor20, opacity: ledOpacity20, boxShadow: '0px 0px '+ledShadowSize20+'px' + ledColor20, position: 'absolute', height: ledSize, width: ledSize, borderRadius: ledSize/2, left: 960-ledSize/2+ledDistanceAngleSide*8, top: ledDistanceStartTop+ledDistance*11+ledDistanceAngleSide*8 }}></div>
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
              <div style={{ position: "absolute", bottom: "90px", left: "1500px", height: "400px"}}>
              <Slider value={valueSlider} onChange={this.handleChangeSlider} style={{padding: '22px 0px'}} vertical max={20} size="medium"/>
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
                <p className='p1' style={{...pStyle, ...{opacity:contentOpacity}}} >
                  Um von einem digitalen Zwilling signifikante Vorteile zu ziehen, müssen der physische und der virtuelle Part miteinander verbunden sein.<br /><br />
                  Das <span style={{...expertStyleToEnter, ...{opacity: 1, color: "#FFFFFF"}}} onClick={this.handleClickShowData("showDatenExpert1")}>Internet der Dinge</span> ermöglicht es real existierenden Objekten mittels <span style={expertStyleToEnter}>Sensoren</span> 
                   Daten zum eigenen, aktuellen Zustand in einer <span style={expertStyleToEnter}>Cloud</span> zu sammeln und weiterzugeben. Diese Informationen fließen in das digitale Modell ein.</p>
                   <Button className='n1' style={{ position: 'absolute', left: 300, top: 300, fontSize: '20px' }} onClick={() => { this._three.startRotation()}}>Starte Datentransfer</Button>        
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
                  In dieser Simulation können unterschiedliche Faktoren virtuell ausprobiert und deren Einfluss berechnet werden.</p>
                  <Button className='n1' style={{ position: 'absolute', left: 300, top: 300, fontSize: '20px' }} onClick={() => { this._three.moveCamera(-50, 15, 700); this._three.showSecondModel();}}>Starte Simulation</Button>        

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
            {/* 
            EXPERT CONTENT HIDE 
            */}
            <Fade in={showDisableExpertDiv} timeout={0} mountOnEnter={true} unmountOnExit={true}>
              <div style={{opacity: "0", position: "absolute", height: "1080px", width: "1500px", top: "0px", left: "0px" }} onClick={() => { this.handleShowDisableExpertDiv()}}>
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