module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'vue'
  ],

  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.ts$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
    '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor'
  },

  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },

  snapshotSerializers: [
    'jest-serializer-vue'
  ],

  mapCoverage: true,

  setupFiles: [
    '<rootDir>/test/unit/setup'
  ],

  coverageDirectory: '<rootDir>/test/unit/coverage',

  collectCoverageFrom: [
    'components/**/*.{js,ts,vue}',
    'layouts/**/*.{js,ts,vue}',
    'pages/**/*.{js,ts,vue}',
    'store/**/*.{js,ts}',
    '!**/node_modules/**'
  ],

  testPathIgnorePatterns: [
    '<rootDir>/test/e2e'
  ],

  testMatch: [
    '**/*.spec.(js|ts)'
  ]
};
