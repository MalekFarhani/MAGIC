const {Given, When, Then, Before, After} = require('@cucumber/cucumber')
const {expect} = require('chai');
const { By, Builder} = require('selenium-webdriver');
const {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);




When('I add {int} and {int}', function (int, int2)
{

}) ;

Then('The result should be {int}', function (int){


});



let driver = new Builder()
   .forBrowser('chrome')
   .build();
//let driver

//Before(function () {
  //      driver = new Builder().forBrowser('chrome').build();
    //}
//)


Given('I visit google homepage', async () => {
        await driver.get("https://app.detente-croisiere.com/");
    }
);

When ('I search for noly', async () => {
        driver.findElement(By.xpath("//*[@id=\"authButton\"]/a")).click();
        driver.findElement(By.xpath("//*[@id=\"loginInput\"]")).sendKeys("khairi.benammar@gmail.com");// PRENOM //la méthode xpath avancée
        driver.findElement(By.xpath("//input[contains(@type,'password')]")).sendKeys("Mm98587052$$");
        driver.findElement(By.xpath("//button[contains(@class,'formButton')]")).click();
    }
);

Then ('I should see the results', async () => {
    let text = await driver.findElement(By.id('search')).getText()
    console.log(text);
})
//When(/^I search for Techverito$/, function () {

//});


