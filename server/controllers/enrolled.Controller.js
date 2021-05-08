const Enrolled = require('../../db/enrolled.model');
const mongoose = require('mongoose');


// Create / POST - create a new item
exports.postEnrolled = async (req, res) => {
  await mongoose.connection.close()
  await mongoose.connect('mongodb://localhost/enrolledDB', { useUnifiedTopology: true, useNewUrlParser: true });

  Enrolled.find({}, (err, result) => {
    console.log(result)
    if (err) {
      console.error(err);
      res.end();

    } else {
      if (result.length === 0) {

        const post = new Enrolled({ id: '1', enrolled: req.body.enrolled });

        post.save();
        res.json({ message: `Enrolled: ${req.body.enrolled}, POSTED to database!` });

      } else {
        let lastID = Number(result.map(enrollNum => enrollNum.id).sort((a, b) => b - a)[0]) + 1;
        const post = new Enrolled({ id: lastID.toString(), enrolled: req.body.enrolled });

        post.save();
        res.json({ message: `Enrolled: ${req.body.enrolled}, POSTED to database!` });
      }
    }
  })
};

// Read / GET - read an item
exports.getEnrolled = async (req, res) => {
  await mongoose.connection.close()
  await mongoose.connect('mongodb://localhost/enrolledDB', { useUnifiedTopology: true, useNewUrlParser: true });

  Enrolled.findOne({ enrolled: Number(req.params.enrolled) }, (err, result) => {
    if (err) {
      console.error(err);
      res.end();

    } else {
      if (result === null) {
        console.log(`${req.params.enrolled} does NOT exist in database!`);
        res.end();

      } else {
        console.log(result)
        res.json(result)
      }
    }
  })
};

// Update / PUT - update an item
exports.putEnrolled = async (req, res) => {
  await mongoose.connection.close()
  await mongoose.connect('mongodb://localhost/enrolledDB', { useUnifiedTopology: true, useNewUrlParser: true });

  Enrolled.updateOne({ enrolled: Number(req.params.enrolled) }, { enrolled: Number(req.body.enrolled) }, (err, result) => {
    if (err) {
      console.error(err);
      res.end();

    } else {
      if (result === null) {
        console.log(`"${req.params.enrolled}" does NOT exist in database!`);
        res.end();

      } else {
        res.json({ message: `Enrolled: ${req.params.enrolled}, UPDATED to Enrolled: ${req.body.enrolled} from the database!` })
      }
    }
  })
};

// Delete / DELETE - delete an item
exports.deleteEnrolled = async (req, res) => {
  await mongoose.connection.close()
  await mongoose.connect('mongodb://localhost/enrolledDB', { useUnifiedTopology: true, useNewUrlParser: true });

  Enrolled.deleteOne({ enrolled: req.params.enrolled }, (err, result) => {
    if (err) {
      console.error(err);
      res.end();

    } else {
      if (result === null) {
        console.log(`"${req.params.enrolled}" does NOT exist in database!`);
        res.end();

      } else {
        res.json({ message: `Enrolled: ${req.params.enrolled}, DELETED from the database!` })
      }
    }
  })
};