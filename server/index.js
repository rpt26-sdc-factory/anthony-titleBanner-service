require('newrelic');
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
    console.log(`\nListening on PORT ${PORT} 👍!`);
  });
}

// export out for jest api tests
module.exports = app;