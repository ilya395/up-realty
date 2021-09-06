const crypto = require("crypto");

function hash(text) {
  return crypto
    .createHash('sha1')
    .update(text)
    .digest('base64')
}

function getSecretRow() {
  return crypto
    .randomBytes(64)
    .toString('hex')
}

module.exports = {
  hash,
  getSecretRow
};