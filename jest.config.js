const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./server/tsconfig.json');

module.exports = {
  rootDir: ".",
  testEnvironment: "node",
  verbose: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/server/' } ),
  globals: {
    'ts-jest': { tsConfig: './server/tsconfig.json' }
  },
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },
}
