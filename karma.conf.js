// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    // использующийся фреймворк
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    // зависимости
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    // конфигурация репортов о покрытии кода тестами
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/unit-tesing'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    // настройка окружения
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'], // ChromeHeadless
    singleRun: false,
    restartOnFileChange: true
  });
};
