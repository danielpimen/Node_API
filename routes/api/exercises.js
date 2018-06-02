const express = require('express');
const router = express.Router();

router.get('/test', (req,res) => res.json({msg: 'It works'}))

//Get All Exercises
router.get('/all', (req,res) => res.json({msg: 'All Exercises'}))

//Get Specific Exercise
router.get('/:exercise'), (req,res) => res.json({msg : '{:exercise}'})

module.exports = router;