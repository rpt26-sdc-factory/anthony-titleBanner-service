const Title = require('../../db/title.model');
const mongoose = require('mongoose');


exports.postTitle = async (req, res) => {
  await mongoose.connection.close()
  await mongoose.connect('mongodb://localhost/titleDB', { useUnifiedTopology: true, useNewUrlParser: true });

  Title.find({}, (err, result) => {
    if (err) {
      console.error(err);
      res.end();

    } else {
      let lastID = Number(result.map(title => title.id).sort((a, b) => b - a)[0]) + 1;
      const post = new Title({ id: lastID.toString(), title: req.body.title });

      post.save();
      res.json({ message: `Title: ${req.body.title}, POSTED to database!` });
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
      if (!result) {
        console.log(`"${req.params.title}" does NOT exist in database!`);
        res.end();

      } else {
        res.json({ message: `Title: ${req.params.title}, UPDATED to Title: ${req.body.title} from the database!` })
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
      if (!result) {
        console.log(`"${req.params.title}" does NOT exist in database!`);
        res.end();

      } else {
        res.json(result);
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
      if (!result) {
        console.log(`"${req.params.title}" does NOT exist in database!`);
        res.end();

      } else {
        res.json({ message: `Title: ${req.params.title}, DELETED from the database!` })
      }
    }
  })
};

