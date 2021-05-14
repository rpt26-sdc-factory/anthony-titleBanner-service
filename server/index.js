const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CRUD routes
app.use('/', userRouter);


app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// server connection
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(__dirname)
    console.log(`\nListening on PORT ${PORT} 👍!`);
  });
}

// export out for jest api tests
module.exports = app;

// let port = 3001;

// const mongoose = require('mongoose');
// const title = require('./routes/title');
// const enrolled = require('./routes/enrolled');

//routes to get and add title
// app.use('/api', title);

//TODO second table
// app.use('/api', enrolled);

// // // mongoose connection
// let MONGO_URI = 'mongodb://server:27017';

// if (process.env.NODE_ENV === 'development') {
//   MONGO_URI = 'mongodb://localhost';
// }

// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// })
//   .then(() => console.log(`Mongo Connected to ${MONGO_URI} 😀!`))
//   .catch(() => console.error('ERROR, Mongo NOT Connected 👎!'));


// mongo environment variables
// const {
//   MONGO_HOSTNAME,
//   MONGO_DB,
//   MONGO_PORT,
//   PORT
// } = process.env;

// mongoose.connect(`mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`, { useNewUrlParser: true });
// const db = mongoose.connection;
// db.once('open', _ => {
//   console.log('Mongo Database connected');
// });

// app.listen(port, function() {
//   console.log(`Server started and listening on port ${PORT}`);
// });