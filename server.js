const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const exercises = require('./routes/api/exercises');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
.connect(db)
.then(()=> console.log('Mongo Connected'))
.catch(err => console.log(err));

app.use(passport.initialize());

app.use('/exercises', exercises);
app.use(express.static('client/build'));

app.listen(PORT, function(){
    console.log(`Server is Running on port ${PORT}!`)
})