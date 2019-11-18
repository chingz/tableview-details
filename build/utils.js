const path = require('path');

module.exports = {
  isDevelopment: process.env.NODE_ENV !== 'production',
  clientBasePath: path.resolve(__dirname, '..', 'client'),
  clientTsConfig: path.resolve(__dirname, '..', 'client', 'tsconfig.json'),
}
