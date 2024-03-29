const properties = require('./nightwatch.props')
module.exports = {
  "src_folders": ["./tests"],
  "page_objects_path": "pageObjects",
  "selenium": {
    "start_process": true,
    "server_path": properties.resourcePath + properties.seleniumServer,
    "log_path": "",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": properties.resourcePath + properties.chromedriver,
    }
  },
  "test_settings": {
    "default": {
      "launch_url": "http://localhost",
      "selenium_port": 4444,
      "selenium_host": "localhost",
      "silent": true,
      "screenshots": {
        "enabled": false,
        "path": ""
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          "w3c": false,
          "args": [
            "window-size=1920,1080"
          ]
        }
      }
    },
    "firefox": {
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true
      }
    },
    "edge": {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    }
  }
}