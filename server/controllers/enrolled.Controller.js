const Enrolled = require('../../db/enrolled.model');
const mongoose = require('mongoose');



exports.postEnrolled = (req, res) => {

};

exports.getEnrolled = async (req, res) => {
  await mongoose.connection.close()
  await mongoose.connect('mongodb://localhost/enrolledDB', { useUnifiedTopology: true, useNewUrlParser: true });
  // console.log(req.params.enrolled)
  Enrolled.findOne({ enrolled: Number(req.params.enrolled) }, (err, result) => {
    if (err) {
      console.error(err);
      res.end();

    } else {
      if (!result) {
        console.log(`${req.params.enrolled} does NOT exist in database!`);
        res.end();

      } else {
        console.log(result)
        res.json(result)
      }
    }
  })
};

exports.putEnrolled = (req, res) => {

};

exports.deleteEnrolled = async (req, res) => {
  await mongoose.connection.close()
  await mongoose.connect('mongodb://localhost/enrolledDB', { useUnifiedTopology: true, useNewUrlParser: true });

  Enrolled.deleteOne({ enrolled: req.params.enrolled }, (err, result) => {
    if (err) {
      console.error(err);
      res.end();

    } else {
      if (!result) {
        console.log(`"${req.params.enrolled}" does NOT exist in database!`);
        res.end();

      } else {
        res.json({ message: `Title: ${req.params.enrolled}, DELETED from the database!` })
      }
    }
  })
};