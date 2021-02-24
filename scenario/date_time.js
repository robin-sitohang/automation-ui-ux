const assert = require("chai").expect;
var $ = require( "jquery" );

Feature('');

Scenario('datetime', async({ I }) => {
    await I.amOnPage('https://www.kompas.id/baca/opini/2021/01/14/krisis-lingkungan-dan-bencana-pandemi/')
    await I.see('Krisis Lingkungan dan Bencana Pandemi')
    let datetime = await I.grabTextFrom('//*[@id="__layout"]/div/div[2]/div/div[1]/div/article/div[2]/div[4]/div[1]/div[2]')
    let result = datetime.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}\+\d{2,4}$/) ? true : false
    console.log(datetime, result)
});
