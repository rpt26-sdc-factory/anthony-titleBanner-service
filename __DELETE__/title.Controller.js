const Title = require('../../../db/mongo/title.model');
const mongoose = require('mongoose');

// Create / POST - create a new item
exports.postTitle = async (req, res) => {
  await mongoose.connection.close()
  await mongoose.connect('mongodb://localhost/titleDB', { useUnifiedTopology: true, useNewUrlParser: true });

  Title.find({}, (err, result) => {
    if (err) {
      console.error(err);
      res.end();

    } else {
      if (result.length === 0) {
        const post = new Title({ id: '1', title: req.body.title });

        post.save();
        res.json({ message: `Title: ${req.body.title}, POSTED to database!` })
      } else {
        let lastID = Number(result.map(title => title.id).sort((a, b) => b - a)[0]) + 1;
        const post = new Title({ id: lastID.toString(), title: req.body.title });

        post.save();
        res.json({ message: `Title: ${req.body.title}, POSTED to database!` });
      }
    }
  })
};

// Read / GET - read an item
exports.getTitle = async (req, res) => {
  await mongoose.connection.close()
  await mongoose.connect('mongodb://localhost/titleDB', { useUnifiedTopology: true, useNewUrlParser: true });

  Title.findOne({ title: req.params.title }, (err, result) => {
    if (err) {
      console.error(err);
      res.end();

    } else {
      if (result === null) {
        console.log(`"${req.params.title}" does NOT exist in database!`);
        res.status(404).end();

      } else {
        res.json(result);
      }
    }
  })
};

// Update / PUT - update an item
exports.putTitle = async (req, res) => {
  await mongoose.connection.close()
  await mongoose.connect('mongodb://localhost/titleDB', { useUnifiedTopology: true, useNewUrlParser: true });

  Title.updateOne({ title: req.params.title }, { title: req.body.title }, (err, result) => {
    if (err) {
      console.error(err);
      res.end();

    } else {
      if (result === null) {
        console.log(`"${req.params.title}" does NOT exist in database!`);
        res.status(404).end();

      } else {
        res.json({ message: `Title: ${req.params.title}, UPDATED to Title: ${req.body.title} from the database!` })
      }
    }
  })
};

// Delete / DELETE - delete an item
exports.deleteTitle = async (req, res) => {
  await mongoose.connection.close()
  await mongoose.connect('mongodb://localhost/titleDB', { useUnifiedTopology: true, useNewUrlParser: true });

  Title.deleteOne({ title: req.params.title }, (err, result) => {
    if (err) {
      console.error(err);
      res.end();

    } else {
      if (result === null) {
        console.log(`"${req.params.title}" does NOT exist in database!`);
        res.status(404).end();

      } else {
        res.json({ message: `Title: ${req.params.title}, DELETED from the database!` })
      }
    }
  })
};

