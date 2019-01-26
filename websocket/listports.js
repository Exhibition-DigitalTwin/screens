const Serialport = require('serialport')

Serialport.list(function (err, ports) {
    ports.forEach(function (port) {
        console.log(port.comName);
    });
});