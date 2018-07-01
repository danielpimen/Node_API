 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 //Create the Schema

 const ExerciseSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
      },
    admin_note: {
        type: String,
    },
    body_weight: {
        type: String,
      },
    body_weight_percent: {
        type: String,
      },
    category: {
        type: String,
      },
    utility: {
        type: String,
      },
    created: {
        type: String,
      },
    created_by: {
        type: String,
      },
    display_image: {
        type: String,
      },
    small_image_1: {
        type: String,
      },
    small_image_2: {
        type: String,
      },
    gif_image: {
        type: String,
      },
    large_image_1: {
        type: String,
      },
    large_image_2: {
        type: String,
      },
    is_portrait: {
        type: String,
      },
    name: {
        type: String,
      },
    no_weight_increase: {
        type: String,
      },
    slug: {
        type: String,
      },
    status: {
        type: String,
      },
    updated: {
        type: String,
      },
    url: {
        type: String,
      },
    video_1: {
        type: String,
      },
    thumbnail_1: {
        type: String,
      },
    thumbnail_2: {
        type: String,
      },
    muscle_group: {
        type: String,
      },
      
 });

 module.exports = Exercise = mongoose.model('exercise', ExerciseSchema);