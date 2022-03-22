// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose');

// Users
const User = new mongoose.Schema({
  username: {type: String, required: true}, 
  password: {type: String, required: true}, 
  recipes:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }]
});

// Each recipe has a list of ingredients 
// Each ingredient is an object containing the name of the ingredient and the quantity. 
const Ingredient = new mongoose.Schema({
  name: {String},
  amount: {Number}
});

// Each user can have many recipes 
// Each recipe has a name, array of ingredient objects, and array of strings holding instructions in order. 
const Recipe = new mongoose.Schema({
  name: {type: String, required: true},
  ingredients: [Ingredient],
  instructions: [String]
});



// TODO: add remainder of setup for slugs, connection, registering models, etc. below

