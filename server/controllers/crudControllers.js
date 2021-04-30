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


exports.putTitle = (req, res) => {

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
        console.log(`"${req.params.title}" has been DELETED from the database!`);
        res.json({ message: 'fuck u' })
      }
    }
  })
};

