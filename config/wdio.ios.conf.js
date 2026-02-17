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
    "../test/specs/**/ios/*screen.spec*.js",
  ]
  // ==================
  // Capabilities
  // ==================
  config.capabilities = [
    {
          // capabilities for local Appium web tests on an Android Emulator
    
          "appium:platformName": "ios",
          "appium:deviceName": "iPhone 17",
          "appium:platformVersion": "26.2",
          "appium:automationName": "XCUITest",
          "appium:app": path.join(process.cwd(), "app/ios/MVCTodo.app"),
        
        }
  ]

    
  config.services=["appium"]
const _config = config;
export { _config as config };