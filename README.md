[english](#screens) | [Deutsch](#Dateisammlung-Digitaler-Zwilling-Ausstellungsgestaltung)

# screens
All files regarding the prototype of our project "Digital Twin exhibition design" at HfG Schwäbisch Gmünd in wintersemester 18/19 in Schwerpunkte 1.

### team
* [Ana Keser](https://anakeser.de/)
* [Jan Schneider](https://jan-patrick.de/)
* [Marcus Schoch](https://marcus-schoch.de/)

## start

### hardware
We recommend at least 8GB RAM and a mediocre graphic card or 16GB RAM when you cannot use a graphic card. We used a touchscreen with 1920x1080px (16:9 21") on Google Chrome.

#### 3D models
All 3d models of our physical and digital model can be found in /src/objects

#### physical model parts
1. 3D-Printed Models
2. Ball-Bearing
3. Small gears
4. Slip Ring
5. 2x NEMA17 Stepper
6. 2x NEMA17 Stepper Driver
7. LED Stripe
8. Arduino Uno/Mega


### installation
1. Make sure you have Version 10.12.0 node.js installed
2. Get the newest version of the code from our [GitHub Repository](https://github.com/Exhibition-DigitalTwin/screens). 
3. Install [npm](https://www.npmjs.com/get-npm).
4. Install all dependencies with 'npm install'.
5. Run 'node listPorts.js' in the terminal in the websocket folder to get the port of your plugged in Arduino.
6. Write the correct USB port into client.js as 'port' in line 5.

### shortcut Windows
Execute the batch file named "start.bat" to start the react app, the arduino client and the websocket server simultaniously.

### manual start
1. Start the react app with 'npm start'.
2. Start the arduino client and the websocket server with 'node (client or server).js' in the right directory.

## React information
You can find the most recent version of react information [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

---

# Dateisammlung Digitaler Zwilling Ausstellungsgestaltung

### team
* [Ana Keser](https://anakeser.de/)
* [Jan Schneider](https://jan-patrick.de/)
* [Marcus Schoch](https://marcus-schoch.de/)