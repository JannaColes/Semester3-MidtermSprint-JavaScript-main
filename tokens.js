const crc32 = require('crc32');

function generateToken(username) {
  const token = crc32(username).toString(16);
  console.log(`Generated token for ${username}: ${token}`);
  return token;
}

module.exports = {
  generateToken
};