# Digital Twin instruction
All files regarding the prototype of our project "Digital Twin exhibition design" at HfG Schwäbisch Gmünd in wintersemester 18/19 in Schwerpunkte 1 with Prof. Jens Döring.

### team
* [Ana Keser](https://anakeser.de/)
* [Jan Schneider](https://jan-patrick.de/)
* [Marcus Schoch](https://marcus-schoch.de/)

## start

### hardware
We recommend at least 8GB RAM and a mediocre graphic card or 16GB RAM when you cannot use a graphic card. We used a touchscreen with 1920x1080px (16:9 21") on Google Chrome. The table itself is prepared as standalone object. You just have to screw together all 4 sides and the top. After that you can place the hill on top. The screws, nooks and nuts are stored with the MDF panels.

#### 3D models
All 3d models of our physical and digital model can be found in /src/objects
The assembly of all the parts should be clear by looking at the structure tab in the application.

#### physical model parts
1. 3D-Printed Models
2. Ball-Bearing
3. Small gears
4. Slip Ring
5. 2x NEMA17 Stepper
6. 2x NEMA17 Stepper Driver
7. LED Stripe
8. Arduino Uno/Mega

#### micro controller
The code just has to be uploaded to the Arduino once, then communication via websocket takes care of the input and the handles.
For the LEDs to work you have to include the FastLED library in the Arduino IDE.

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

## more

### issues & help
If there is any problem, issue or question you can open an issue at [GitHub](https://github.com/Exhibition-DigitalTwin/screens/issues).

### React  + code information
You can find the most recent version of react information [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md). Find all used dependencies at the [overview](https://github.com/Exhibition-DigitalTwin/screens/network/dependencies).