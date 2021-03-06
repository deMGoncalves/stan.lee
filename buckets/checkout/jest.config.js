module.exports = {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.spec.{js,jsx}'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  coverageReporters: [
    'text-summary'
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  globals: {
    'ts-jest': {
      packageJson: 'package.json',
      tsConfig: 'tsconfig.json'
    }
  },
  moduleNameMapper: {
    '@sacola': '<rootDir>/src/sacola',
    '@components': '<rootDir>/src/components',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
  },
  setupFiles: [
    '<rootDir>/jsdom.setup.js'
  ],
  testMatch: [
    '**/?(*.)+(spec).js?(x)'
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'ts-jest'
  },
  verbose: true
}
