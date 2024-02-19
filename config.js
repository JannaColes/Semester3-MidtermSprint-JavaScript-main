const fs = require('fs');

const configFilePath = './config.json';

function initialize() {
  if (!fs.existsSync(configFilePath)) {
    const defaultConfig = {

    };
    fs.writeFileSync(configFilePatch, JSON.stringify(defaultConfig, null, 2));
  }

  module.exports = {
    initialize, 
    getConfig,
    updateConfig
  };
}