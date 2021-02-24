var $ = require( "jquery" );

Feature('');

Scenario('textalign', async({ I }) => {
    await I.amOnPage('https://www.kompas.id/baca/opini/2021/01/14/krisis-lingkungan-dan-bencana-pandemi/')
    await I.see('Krisis Lingkungan dan Bencana Pandemi')
    I.waitForVisible('.font-georgia')
    let text = await I.executeScript(function(){
        return getComputedStyle(document.querySelector('.text-center')).textAlign
        })
    console.log(text)
});
