const { CTRLC, UP_KEY, DOWN_KEY, RIGHT_KEY, LEFT_KEY } = require('./constants');

// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", function handleUserInput(key) {
    if (key === CTRLC) {
      process.exit();
    }
    if (key === UP_KEY) {
      conn.write("Move: up");
    }
    if (key === LEFT_KEY) {
      conn.write("Move: left");
    }
    if (key === DOWN_KEY) {
      conn.write("Move: down");
    }
    if (key === RIGHT_KEY) {
      conn.write("Move: right");
    }
  });
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

module.exports = {setupInput}