module.exports = function (config) {
  config.set({
    testRunner: 'karma',
    mutator: 'es5',
    transpilers: [],
    reporter: ["html","clear-text","progress"],
    testFramework: 'jasmine',
    coverageAnalysis: 'perTest',
    karmaConfigFile: 'test/config/karma.conf.js',
    mutate: ['js/**/*.js']
  })
}
