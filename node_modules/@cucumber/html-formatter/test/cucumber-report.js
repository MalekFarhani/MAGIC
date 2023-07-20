const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap', // You can choose different themes
    jsonFile: 'path/to/your/cucumber_report.json', // Path to the JSON file generated after the Cucumber execution
    output: 'path/to/your/report/file.html', // Output path for the HTML report file
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        'App Version': '1.0.0',
        'Test Environment': 'Testing',
        'Browser': 'Chrome 100'
    }
};

reporter.generate(options);
