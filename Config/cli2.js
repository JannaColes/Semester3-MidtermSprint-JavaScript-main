#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const myArgs = process.argv.slice(2);
const configFile = path.join(__dirname, 'config.json');

function displayConfig() {
    console.log('Displaying configuration:');
    fs.readFile(configFile, (error, data) => {
        if(error) throw error;
        console.log(JSON.parse(data));
    });
}

function resetConfig() {
    console.log('Resetting configuration to default state.');
    let configdata = JSON.stringify({}, null, 2); // Empty object for default state
    fs.writeFile(configFile, configdata, (error) => {
        if(error) throw error;
        console.log('Config file reset to original state');
    });
}

function setConfig() {
    console.log('Setting configuration:');
    console.log(`Setting key "${myArgs[0]}" to value "${myArgs[1]}".`);
    fs.readFile(configFile, (error, data) => {
        if(error) throw error;
        let cfg = JSON.parse(data);
        cfg[myArgs[0]] = myArgs[1];
        fs.writeFile(configFile, JSON.stringify(cfg, null, 2), (error) => {
            if (error) throw error;
            console.log('Config file successfully updated.');
        });
    });
}

function configApp() {
    switch (myArgs[0]) {
        case '--show':
            displayConfig();
            break;
        case '--reset':
            resetConfig();
            break;
        case '--set':
            if (myArgs.length < 3) {
                console.log('Usage: cli2.js --set <key> <value>');
                return;
            }
            setConfig();
            break;
        case '--help':
        case '--h':
        default:
            console.log('Usage: cli2.js [options]');
            console.log('Options:');
            console.log('  --show           Display the current configuration');
            console.log('  --reset          Reset the configuration to the original state');
            console.log('  --set <key> <value>  Set a configuration value for the specified key');
            console.log('  --help, --h      Display usage information');
            break;
    }
}

configApp();
