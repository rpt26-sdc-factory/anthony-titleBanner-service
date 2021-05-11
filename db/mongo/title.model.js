const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const titleSchema = new Schema({
  id: String,
  title: String
});


let Title = mongoose.model('title', titleSchema);

module.exports = Title;