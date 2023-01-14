// Server Express starter and quick route setup
const express = require('express');
const app = express();
const dotenv = require('dotenv');
// use dotenv to load environment variables from .env file
dotenv.config();
const port = process.env.EXPRESS_PORT || 3000;


// SIMPLE INDEX WHO SERVE A INDEX.HTML IN THE PUBLIC FOLDER
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// MAKE THE PUBLIC FOLDER PUBLIC

app.use(express.static('public'));



// Start express server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

