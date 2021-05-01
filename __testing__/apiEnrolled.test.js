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
it('Should POST enrolled number to database', async (done) => {
  const postedEnrolledNum = '18789';

  const res = await request.post('/postEnrolled')
    .send({
      id: '1',
      enrolled: postedEnrolledNum,
    });

  expect(res.status).toBe(200);
  expect(res.body.message).toBe(`Enrolled: ${postedEnrolledNum}, POSTED to database!`);
  done();
});

// READ / GET
it('Should GET enrolled number from database', async (done) => {
  const postedEnrolledNum = '18789';

  const res = await request.get(`/getEnrolled/${postedEnrolledNum}`);

  expect(res.status).toBe(200);
  expect(res.body.enrolled.toString()).toBe(`${postedEnrolledNum}`);
  done();
});

// PUT / Update
it('Should PUT (Update) enrolled number to database', async (done) => {
  const searchedEnrolledNum = '18789';
  const updatedEnrolledNum = '21987';

  const res = await request.put(`/updateEnrolled/${searchedEnrolledNum}`)
    .send({
      enrolled: updatedEnrolledNum,
    });

  expect(res.status).toBe(200);
  expect(res.body.message).toBe(`Enrolled: ${searchedEnrolledNum}, UPDATED to Enrolled: ${updatedEnrolledNum} from the database!`);
  done()
});

// DELETE
it('Should DELETE title from database', async (done) => {
  const searchedEnrolledNum = '21987';

  const res = await request.delete(`/deleteEnrolled/${searchedEnrolledNum}`);

  expect(res.status).toBe(200);
  expect(res.body.message).toBe(`Enrolled: ${searchedEnrolledNum}, DELETED from the database!`);
  done();
});

// Cleans up database between each test
afterAll(async () => {
  await Enrolled.deleteMany()
  await mongoose.disconnect()
});