/** @type {import('jest').Config} */
module.exports = {
    setupFilesAfterEnv: ['./src/setupTests.js'],
    transform: {
      '^.+\\.(js|jsx)$': ['babel-jest', { configFile: './babel.config.cjs' }]
    },
    testEnvironment: 'jsdom',
    extensionsToTreatAsEsm: ['.jsx'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
 };

