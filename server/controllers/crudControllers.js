const Title = require('../../db/title.model');
const axios = require('axios');
const mongoose = require('mongoose');


exports.postTitle = async (req, res) => {
  Title.getCollection('titles').find({}, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log(results)
    }
  })
  res.end();
  //   let { title } = req.body;
  //   res.send({ message: title });
};

// Update / PUT - update an item
exports.putTitle = async (req, res) => {
  await mongoose.connect('mongodb://localhost/titleDB', { useUnifiedTopology: true, useNewUrlParser: true });

  Title.updateOne({ title: req.params.title }, { title: req.body.title }, (err, result) => {
    if (err) {
      console.error(err);

    } else {
      if (!result) {
        console.log(`"${req.params.title}" does NOT exist in database!`);

      } else {
        res.json({ message: `Title: ${req.params.title}, UPDATED to Title: ${req.body.title} from the database!` })
      }
    }
  })
};

// Read / GET - read an item
exports.getTitle = async (req, res) => {
  await mongoose.connect('mongodb://localhost/titleDB', { useUnifiedTopology: true, useNewUrlParser: true });

  Title.findOne({ title: req.params.title }, (err, result) => {
    if (err) {
      console.error(err);

    } else {
      if (!result) {
        console.log(`"${req.params.title}" does NOT exist in database!`);

      } else {
        res.json(result);
      }
    }
  })
};

// Delete / DELETE - delete an item
exports.deleteTitle = async (req, res) => {
  await mongoose.connect('mongodb://localhost/titleDB', { useUnifiedTopology: true, useNewUrlParser: true });

  Title.deleteOne({ title: req.params.title }, (err, result) => {
    if (err) {
      console.error(err);

    } else {
      if (!result) {
        console.log(`"${req.params.title}" does NOT exist in database!`);

      } else {
        res.json({ message: `Title: ${req.params.title}, DELETED from the database!` })
      }
    }
  })
};

