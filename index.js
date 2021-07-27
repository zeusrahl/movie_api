/*let topTen = [
    // 1
    {
        title: 'The Princess Bride',
        description: ,
        genre: ,
        director: {
            bio: ,
            birth: ,
            death: ,
        },
        image: 
    },

    // 2
    {
        title: 'A Christmas Story',
        description: ,
        genre: ,
        director: {
            bio: ,
            birth: ,
            death: ,
        },
        image: 
    },

    // 3
    {
        title: 'Clue',
        description: ,
        genre: ,
        director: {
            bio: ,
            birth: ,
            death: ,
        },
        image: 
    },

    // 4
    {
        title: 'Wizard of Oz',
        description: ,
        genre: ,
        director: {
            bio: ,
            birth: ,
            death: ,
        },
        image: 
    },

    // 5
    {
        title: 'Citizan Kane',
        description: ,
        genre: ,
        director: {
            bio: ,
            birth: ,
            death: ,
        },
        image: 
    },

    // 6
    {
        title: 'Tombstone',
        description: ,
        genre: ,
        director: {
            bio: ,
            birth: ,
            death: ,
        },
        image: 
    },

    // 7
    {
        title: 'Silverado',
        description: ,
        genre: ,
        director: {
            bio: ,
            birth: ,
            death: ,
        },
        image: 
    },

    // 8
    {
        title: 'Airplane',
        description: ,
        genre: ,
        director: {
            bio: ,
            birth: ,
            death: ,
        },
        image: 
    },

    // 9
    {
        title: 'Monty Python and the Quest for the Holy Grail',
        description: ,
        genre: ,
        director: {
            bio: ,
            birth: ,
            death: ,
        },
        image: 
    },

    // 10
    {
        title: 'Identity',
        description: ,
        genre: ,
        director: {
            bio: ,
            birth: ,
            death: ,
        },
        image: 
    },
];*/

const express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    uuid = require('uuid');

const app = express();

app.use(morgan('common'));

app.use(bodyParser.json());

// Return list of movies (/movies) GET
app.get('/movies', (req, res) => {
    res.send('Here lies a list of documented movies in this API');
});

// Return JSON data for specified movie (/movies/[movie title]) GET
app.get('/movies/:movieTitle', (req, res) => {
    // res.json(movies.find( (movie) => { return movie.title === req.params.title }));
    res.send('The JSON data for the retrieved movie');
});

// Return movies with given Genre (/movies/[genre]) GET
app.get('/movies/genre/:genre', (req, res) => {
    // code for parsing JSON and listing the movies with the given genre.
    res.send('The ' + req.params.genre + ' movies are on this list');
});

// Return director info (/directors/[director name]) GET
app.get('/directors/:director', (req, res) => {
    // res.json(directors.find( (director) => { return director.name === req.params.name}));
    res.send('You found the information for ' + req.params.director + '!');
});

// Register user (/users) POST
app.post('/users', (req, res) => {
    /*let newUser = req.body;

    if (!newUser.name) {
        const message = 'Missing name in request body';
        res.status(400).send(message);
    } else {
        newUser.id = uuid.v4();
        users.push(newUser);
        res.status(201).send(newUser);
    }*/
    res.send('Congrats for becoming a new user!');
});

// Update username (/users/[user-name]) PUT
app.put('/users/:user/:userID', (req, res) => {
      // Stuck on this code. Need some help.
    /*let user = users.find((user) => { return user.name === req.params.name });

    if (user) {
        user.
    }*/
    res.send('Here is an update of your ID. Well done!');
});

// Add movie to User's Favorites (/users/[user-name]/movies/[movieID]) POST
app.post('/users/:user/movies/:favMovie', (req, res) => {
    // Coding will be coming soon
    res.send('Eventually, you\'ll be able to add movies, but not yet!');
});

// Delete move from User's Favorites (/users/[user-name]/movies/[movieID]) DELETE
app.delete('/users/:user/movies/remove/:favMovie', (req,res) => {
    // Coding will be coming soon
    res.send('I\'m sorry, but you do not have any favorites to delete yet.');
});

// Deregister user (/users/[user-name]) DELETE
app.delete('/users/:user', (req, res) => {
    // Coding will be coming soon
    res.send('Congrats! You have now deregistered... NO ONE!');
});

/*app.get('/', (req, res) => {
    res.send('For now, my Movie API')
});

app.use(express.static('public'));

app.get('/movies', (req, res) =>{
    res.json(topTen);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something Broke!');
});*/

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});