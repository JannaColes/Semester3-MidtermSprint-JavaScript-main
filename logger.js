const fs = require('fs');

const logFilePath = './app.log';

function log(action) {
  const logEntry = `${new Date().toISOString()} - ${action}\n`;
  fs.appendFileSync(logFilePath, logEntry);
}

module.exports = {
  log
};