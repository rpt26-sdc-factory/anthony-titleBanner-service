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

exports.getTitle = async (req, res) => {
  await mongoose.connect('mongodb://localhost/titleDB', { useUnifiedTopology: true, useNewUrlParser: true });

  Title.findOne({ title: req.params.title }, (err, result) => {
    if (err) {
      console.error(err);

    } else {
      if (!result) {
        console.log(`"${req.params.title}" does NOT exist in database!`);

      } else {
        // console.log({ title: result.title });
        res.json(result)
      }
    }
  })
};




exports.putTitle = (req, res) => {
  console.log(req.params.title)
  Title.findOne({ title: req.params.title }, (err, result) => {
    if (err) {
      console.error(err)
    } else {
      console.log(result)
    }
  })
  res.end();
};

exports.deleteTitle = (req, res) => {

};

