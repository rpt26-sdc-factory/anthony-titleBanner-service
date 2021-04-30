const Enrolled = require('../../db/enrolled.model');
const mongoose = require('mongoose');



exports.postEnrolled = async (req, res) => {
  await mongoose.connection.close()
  await mongoose.connect('mongodb://localhost/enrolledDB', { useUnifiedTopology: true, useNewUrlParser: true });


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

exports.putEnrolled = async (req, res) => {
  await mongoose.connection.close()
  await mongoose.connect('mongodb://localhost/enrolledDB', { useUnifiedTopology: true, useNewUrlParser: true });

  Enrolled.updateOne({ enrolled: req.params.enrolled }, { enrolled: req.body.enrolled }, (err, result) => {
    if (err) {
      console.error(err);
      res.end();

    } else {
      if (!result) {
        console.log(`"${req.params.enrolled}" does NOT exist in database!`);
        res.end();

      } else {
        res.json({ message: `Enrolled: ${req.params.enrolled}, UPDATED to Enrolled: ${req.body.enrolled} from the database!` })
      }
    }
  })
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
        res.json({ message: `Enrolled: ${req.params.enrolled}, DELETED from the database!` })
      }
    }
  })
};