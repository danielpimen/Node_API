const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Exercise = require('../../models/Exercise');

router.get('/test', (req,res) => res.json({msg: 'It works'}))

//Get Free Weight Training Exercises(2,5,7,11,14,24)
//Get Machine Weight Training(8,9,10,12,17,19)
//Get Body Weight Exercises(4,13,16,18,23)
//Get Flexibility Training(3,6,21,22)
//Get Misc Exercises(1,15,20)
//Get Specific Workout With ID 


//Get All Exercises 
router.get('/all_exercises', (req, res)=>{
    Exercise.find({}, function(err, exercises){
        var exerciseMap = {};
        exercises.forEach(function(exercise){
            exerciseMap[exercise._id] = exercise;
        });
        res.send(exerciseMap);
    })
});

///Create route so user can grab data 

//Get Specific Exercise
router.get('/exercise', (req, res)=>{
    Exercise.find({ id : "1"}, (err, data)=>{
        //console.log(data)
        res.json(defaultStatus);
    })
});
module.exports = router;