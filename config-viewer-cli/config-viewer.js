#!/usr/bin/env node

const fs = require('fs');
const { program } = require('commander');

program
  .version('1.0.0')
  .description('CLI tool to view configuration file(s)')
  .option('-f, --file <file>', 'Specify the configuration file to view')
  .parse(process.argv);

const configFile = program.opts().file;

console.log('Config File:', configFile);

if (!configFile) {
  console.error('Error: Please specify a configuration file using -f or --file option.');
  process.exit(1);
}

fs.readFile(configFile, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${configFile}`);
    console.error(err);
    process.exit(1);
  }
  console.log(`Contents of ${configFile}:`);
  console.log(data);
});

