module.exports = {
    'bloomberg': require('./js/bloomberg'),
    'candy': require('./js/candy'),
    'classical': require('./js/classical'),
    'dark-side': require('./js/dark-side'),
    'denim': require('./js/denim'),
    'everest': require('./js/everest'),
    'excel': require('./js/excel'),
    'gelati': require('./js/gelati'),
    'golden-goose': require('./js/golden-goose'),
    'ice': require('./js/ice'),
    'la-resistance': require('./js/la-resistance'),
    'melon': require('./js/melon'),
    'seven-seas': require('./js/seven-seas'),
    'sky': require('./js/sky'),
    'technology': require('./js/technology'),
    'the-times': require('./js/the-times')
};

Object.defineProperty(modulue.exports, 'buildTheme', {
    value: require('./build-theme')
});
