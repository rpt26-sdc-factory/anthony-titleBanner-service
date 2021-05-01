import 'regenerator-runtime/runtime';
const mongoose = require('mongoose');
const app = require('../server/index');
const supertest = require('supertest');
const request = supertest(app);
const Enrolled = require('../db/enrolled.model');


// connect to db prior to tests
beforeAll(async () => {
  const MONGO_URI = 'mongodb://localhost/testEnrolledDB';
  await mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });
})

// POST
it('Should POST title to database', async (done) => {

  done()
});

// READ / GET
it('Should GET title to database', async (done) => {

  done()
});

// PUT / Update
it('Should PUT (Update) title to database', async (done) => {

  done()
});

// DELETE
it('Should DELETE title to database', async (done) => {

  done()
});

// Cleans up database between each test
// Cleans up database between each test
afterEach(async () => await Enrolled.deleteMany());
afterAll(async () => await mongoose.disconnect());