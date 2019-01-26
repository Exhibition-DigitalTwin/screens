const WebSocket = require("ws");
const readline = require("readline");
var SerialPort = require("serialport");
const ReadlineParser = require("@serialport/parser-readline");
var port = new SerialPort("COM5"); //"/dev/cu.SLAB_USBtoUART"  Anas Port

const ws = new WebSocket("ws://localhost:8080");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function (line) {
  ws.send(line);
}).on("error", function (e) {
  console.log("Error");
});

function send(data) {
  ws.send(data);
}

ws.on("open", function open() {
  ws.send("connected");
});

ws.on("message", function incoming(data) {
  console.log(data);
  port.write(data);
});

const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));
parser.on("data", console.log);
parser.on("data", send);