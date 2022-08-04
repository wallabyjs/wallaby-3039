module.exports = {
    preset: 'ts-jest',
    // testEnvironment: 'jsdom',
    testEnvironment: 'node',
    // runInBand: true,
    // testPathIgnorePatterns: ['/fixtures/', '/utils/'],
  
    /// Have attempted with these coverage settings both ON and DISABLED
    // collectCoverage: true,
    // coverageDirectory: 'coverage',
    // coverageReporters: ['html', 'lcov', 'text'],
    // collectCoverageFrom: ['/src/**/*.ts'],
    // coveragePathIgnorePatterns: ['/node_modules/', 'src/index.ts', '\\.d\\.ts$'],
    testMatch: ['<rootDir>/test/**/*.spec.ts'],
    rootDir: __dirname,
    globals: {
      __DEV__: true,
      __TEST__: true,
      __BROWSER__: true,
    },
  }