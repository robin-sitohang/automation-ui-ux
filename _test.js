Feature('');

Scenario('test something', ({ I }) => {
    I.amOnPage('https://www.kompas.id/baca/opini/2021/01/14/krisis-lingkungan-dan-bencana-pandemi/')
    I.see('Krisis Lingkungan dan Bencana Pandemi')
});
