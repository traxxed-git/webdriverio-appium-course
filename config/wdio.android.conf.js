import { config } from './wdio.shared.conf.js';
import path from "path";


  // ==================
  // Runner Configuration
  // ==================

  config.port = 4723;


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
      "platformName": "Android",
      "appium:deviceName": "Pixel 4",
      "appium:platformVersion": "12.0",
      "appium:automationName": "UiAutomator2",
      //   "appium:app":
      // "/Users/alvinalonzo/Sites/appium-class/wdio-appium/app/android/ApiDemos-debug.apk",
      "appium:app": path.join(process.cwd(), "app/android/ColorNote-Notepad.apk"),
      "appium:autoGrantPermissions":true,
    }
  ]

  config.services=["appium"]
const _config = config;
export { _config as config };