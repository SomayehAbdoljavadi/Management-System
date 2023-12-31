  exports.PartConfig = (Interface) => {
    let config = require('../../config.js');

    let partLoggerConfig = {
      global: {

      },
      instance: {
        sourceTypeWidth: 8,
        sourceNameWidth: 20,
        winstonConfig: {
          handleExceptions: true,
          json: true,
          colorize: true,
          timestamp: function () {
            return (new Date()).toLocaleTimeString();
          },
          prettyPrint: true
        },
        storageConfig: {
          dls: {
            enabled: false,
            storageName: 'Logger@6-test'
          },
          mongo: {
            enabled: false,
            storageName: 'Logger@6-test'
          },
          fileSystem: {
            enabled: false,
            path: 'message.json'
          },
          http: {
            enabled: false,
            host: '127.0.0.1',
            port: '80',
            path: '/service/logServer/saveLog',
            method: 'POST'
          }
        },
        levelConfig: {
          event: {
            view: true,
            save: true,
            color: 'green',
            viewPath: false,
            priority: 2
          },
          warning: {
            view: true,
            save: true,
            color: 'yellowBg',
            viewPath: true,
            priority: 1
          },
          error: {
            view: true,
            save: false,
            color: 'redBg',
            viewPath: true,
            priority: 0
          },
          info: {
            view: true,
            save: true,
            color: 'blueBg',
            viewPath: true,
            priority: 3
          },
          saves: {
            view: true,
            save: true,
            color: 'cyanBg',
            viewPath: true,
            priority: 4
          },
          mosifa: {
            view: true,
            save: false,
            color: 'cyanBg',
            viewPath: true,
            priority: 5
          },
          part: {
            view: true,
            save: true,
            color: 'cyanBg',
            viewPath: true,
            priority: 6
          }
        }
      }
    };

    let tracerConfig = {
      TraceTitle: 'part' + Interface + 'Interface@' + config.version,
      sampler: {
        type: 'probabilistic',
        param: 1
      }

    };
    if (Interface == "Profile") {
      tracerConfig.templates = {
        tagTemplate: {
          component: 'part' + Interface + 'Interface@' + config.version
        },
        logTemplate: {
          component: 'part' + Interface + 'Interface@' + config.version
        }
      }
    }

    this.ConfigGW = {
      global: {
        gatewayEnable: true,
        host: Interface + '.apipart.ir',
        protocol: 'https',
        port: 443,
        tracerConfig: tracerConfig,
        partLoggerConfig: partLoggerConfig,
      },

      instance: {
        auth: {
          user: 'intern_28',
          pass: 'intern_28'

        }
      },
    };
    if (Interface == "profile") {

      this.ConfigGW.instance.auth.pass = '123456'

    }
  }