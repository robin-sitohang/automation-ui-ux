Feature('');

Scenario('Facebook', ({ I }) => {
    I.amOnPage('https://www.kompas.id/baca/opini/2021/01/14/krisis-lingkungan-dan-bencana-pandemi/')
    I.see('Krisis Lingkungan dan Bencana Pandemi')
    I.click('//*[@id="__layout"]/div/div[2]/div/div[1]/div/article/div[2]/div[4]/div[2]/div[2]/div/a[1]')
});
