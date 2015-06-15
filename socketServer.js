var net = require('net');
var readline = require('readline');

var HOST = 'localhost'
var PORT = 5434

var socket = new net.Socket();
socket.connect(PORT, HOST, function(){
  console.log('Connected');
});

socket.on('data', function(data){
  console.log('DATA: ' + data);
});
socket.on('close', function(){
  console.log('Closed'); 
});

process.on('SIGINT', function(){
  socket.destroy();
});

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(data){
  socket.write(data);
  console.log("Echo: " +data);
});
