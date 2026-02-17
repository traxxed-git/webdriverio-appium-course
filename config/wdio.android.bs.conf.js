import { config } from './wdio.shared.conf.js';
// ==================
  // Browserstack
  // ==================
config.user="alvinalonzo_azyPs7"
config.key = "iaaSN4T6tstXhfMJHn8D"


config.projectName = "Notepad Test"
config.buildName = "Test Build"
config.debug= "true"
config.appiumVersion = "3.1.0"
config.framework = "mocha"
config.mochaOpts =  {
    ui:'bdd',
    timeout:150000

}
  // ==================
  // Specs
  // ==================
config.specs =  [
    // ToDo: define location for spec files here
    "../test/specs/**/android/*screen.spec*.js",
  ]
  // ==================
  // Capabilities
  // ==================
  config.capabilities = [{
      "platformName": "android",
      "appium:deviceName": "Google Pixel 5",
      "appium:platformVersion": "11.0",
      "appium:automationName": "UiAutomator2",
      "appium:app": "bs://3e805ee478b5b904ec0d8a3eb4fd5065de721105",
      "appium:autoGrantPermissions":true,
    }
  ];

  // config.services= [["browserstack",{

  // }]];

  config.services= [
    [
      'browserstack',
      {
        buildIdentifier: '1',
   
        testObservabilityOptions: {
          buildName: "bstack-demo",
          projectName: "BrowserStack Sample",
          buildTag: ["Tag1","Tag2"]
        },
        accessibility: true,
        accessibilityOptions: {
          'wcagVersion': 'wcag21a',
          'includeIssueType': {
            'bestPractice': true,
            'needsReview': false
          },
          'includeTagsInTestingScope': ['First'],
          'excludeTagsInTestingScope': ['Twice']
        },

      },
    ],
  ]
const _config = config;
export { _config as config };

