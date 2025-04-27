import { Options } from '@wdio/types';

export const config: Options.Testrunner = {
    runner: 'local',
    specs: ['./test/specs/**/*.ts'],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Android Emulator',
        'appium:platformVersion': '11',
        'appium:automationName': 'UiAutomator2',
        'appium:app': '/path/to/your/app.apk',
    }],
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec'],
    services: ['appium'],
    mochaOpts: {
        timeout: 60000
    },
    autoCompileOpts: {
        tsNodeOpts: {
            transpileOnly: true,
            project: './tsconfig.json'
        }
    }
};
