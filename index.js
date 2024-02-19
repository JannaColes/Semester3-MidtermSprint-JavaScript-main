const config = require('./config');
const tokens = require('./tokens');
const users = require('./users');
const logger = require('./logger');

config.initialize();
tokens.generateToken('username');
users.searchUser('username');
logger.log('Application started');