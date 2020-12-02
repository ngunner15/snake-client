const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Say: Sup");
  });

  // hard codded snake movements
  // conn.on('connect', () => {
  //   setTimeout(() => {conn.write("Move: up");}, 500)
  //   setTimeout(() => {conn.write("Move: left");}, 1500)
  //   setTimeout(() => {conn.write("Move: up");}, 2500)
  // })
  

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
}

module.exports = {connect};