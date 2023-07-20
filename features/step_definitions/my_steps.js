const {Given, When, Then, Before, After} = require('@cucumber/cucumber')
const {expect} = require('chai');
const { By, Builder} = require('selenium-webdriver');



/*
When('I add {int} and {int}', function (int, int2)
{

}) ;

Then('The result should be {int}', function (int){


});
*/
let driver = new Builder()
   .forBrowser('chrome')
   .build();
//let driver

//Before(function () {
  //      driver = new webdriver.Builder().forBrowser('chrome').build();
   // }
//)

//After(function () {
 //   driver.quit();
//})

Given('I visit google homepage', async () => {
        await driver.get("https://www.google.com");
    }
);

When ('I When I search for Techverito', async () => {
        await driver.findElement(By.name('q')).sendKeys('Techverito'+'\n')
    }
);

Then ('I should see the results', async () => {
    let text = await driver.findElement(By.id('search')).getText()
    console.log(text);
})
//When(/^I search for Techverito$/, function () {

//});