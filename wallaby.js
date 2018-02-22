module.exports = (wallaby) => {

    const compiler = wallaby.compilers.babel({presets: [['@vue/app', {modules: 'commonjs'}]]})

    return {
      files: ['src/**/*', 'package.json'],

      tests: ['test/**/*.spec.js'],

      env: {
        type: 'node',
        runner: 'node'
      },

      compilers: {
        '**/*.js': compiler,
        '**/*.vue': require('wallaby-vue-compiler')(compiler)
      },

      preprocessors: {
        '**/*.vue': file => require('jest-vue-preprocessor').process(file.content, file.path)
      },

      setup: function (wallaby) {
        const jestConfig = require('./package.json').jest || {}

        jestConfig.moduleNameMapper = {
          '^@/components/([^\\.]*)$': wallaby.projectCacheDir + '/src/components/$1.vue',
          '^@/(.*)$': wallaby.projectCacheDir + '/src/$1'
        }
        jestConfig.transform = {}

        wallaby.testFramework.configure(jestConfig)
      },

      testFramework: 'jest'
    }
  }
