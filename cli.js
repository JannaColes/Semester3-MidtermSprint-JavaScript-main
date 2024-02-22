const fs = require('fs-extra');
const path = require('path');

async function initializeApp() {
  try {
    await fs.ensureDir(path.join(__dirname, 'config'));
    await fs.ensureDir(path.join(__dirname, 'help'));

    await fs.writeFile(path.join(__dirname, 'config', 'default-config.json'), JSON.stringify({/* default */}, null, 2));

    await fs.writeFile(path.join(__dirname, 'help', 'default-help.txt'), 'This is the default help text.');

    console.log('Application initialized successfully!');
  } catch (err) {
    console.error('Error initializing application:', err);
  }
}

initializeApp();