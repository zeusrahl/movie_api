const express = require('express'),
    morgan = require('morgan');

const app = express();

let topTen = [
    // 1
    {
        title: 'The Princess Bride'
    },

    // 2
    {
        title: 'A Christmas Story'
    },

    // 3
    {
        title: 'Clue'
    },

    // 4
    {
        title: 'Wizard of Oz'
    },

    // 5
    {
        title: 'Citizan Kane'
    },

    // 6
    {
        title: 'Tombstone'
    },

    // 7
    {
        title: 'Silverado'
    },

    // 8
    {
        title: 'Airplane'
    },

    // 9
    {
        title: 'Monty Python and the Quest for the Holy Grail'
    },

    // 10
    {
        title: 'Identity'
    },
];

app.use(morgan('common'));

app.get('/', (req, res) => {
    res.send('For now, my Movie API')
});

app.use(express.static('public'));

app.get('/movies', (req, res) =>{
    res.json(topTen);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something Broke!');
});

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});