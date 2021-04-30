var express = require('express');
var cors = require('cors');

var app = express();
var bodyParser = require('body-parser');
var title = require('./routes/title');
var enrolled = require('./routes/enrolled');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const userRouter = require('./routes/routes');

app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());

let port = 3001;

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes to get and add title
app.use('/api', title);

//TODO second table
app.use('/api', enrolled);

// CRUD routes
app.use('/', userRouter);


app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

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


// server connection
app.listen(port, () => {
  console.log(`\nListening on PORT ${port} 👍!`);
});


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