const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enrolledSchema = new Schema({
  id: String,
  enrolled: Number
});

let Enrolled = mongoose.model('enrollednums', enrolledSchema);

module.exports = Enrolled;
