// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin W U+0077 A U+0061 S U+0073 D U+0064
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", function handleUserInput(key) {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === '\u0077') {
      conn.write("Move: up");
    }
    if (key === '\u0061') {
      conn.write("Move: left");
    }
    if (key === '\u0073') {
      conn.write("Move: down");
    }
    if (key === '\u0064') {
      conn.write("Move: right");
    }
  });
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

module.exports = {setupInput}