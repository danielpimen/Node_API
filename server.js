const express = require('express');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const exercises = require('./routes/api/exercises');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(passport.initialize());

app.use('/exercises', exercises);
app.use(express.static('client/build'));

app.listen(PORT, function(){
    console.log(`Server is Running on port ${PORT}!`)
})