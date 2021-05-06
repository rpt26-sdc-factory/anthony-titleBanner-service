import 'regenerator-runtime/runtime';
const mongoose = require('mongoose');
const app = require('../server/index');
const supertest = require('supertest');
const request = supertest(app);
const Title = require('../db/title.model');


// connect to db prior to tests
beforeAll(async () => {
  const MONGO_URI = 'mongodb://localhost/testTitleDB';
  await mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });
})


// POST
it('Should POST title to database', async (done) => {
  const postedTitle = 'Superfake Title';

  const res = await request.post('/postTitle')
    .send({
      id: '1',
      title: postedTitle,
    });

  expect(res.status).toBe(200);
  expect(res.body.message).toBe(`Title: ${postedTitle}, POSTED to database!`);
  done();
});

// READ / GET
it('Should GET title from database', async (done) => {
  const searchedTitle = 'Superfake Title';

  const res = await request.get(`/getTitle/${searchedTitle}`);

  expect(res.status).toBe(200);
  expect(res.body.title).toBe(`${searchedTitle}`);
  done();
});

// PUT / Update
it('Should PUT (Update) title to database', async (done) => {
  const searchedTitle = 'Superfake Title';
  const updatedTitle = 'Updated Title';

  const res = await request.put(`/updateTitle/${searchedTitle}`)
    .send({
      title: updatedTitle,
    });

  expect(res.status).toBe(200);
  expect(res.body.message).toBe(`Title: ${searchedTitle}, UPDATED to Title: ${updatedTitle} from the database!`);
  done()
});

// DELETE
it('Should DELETE title from database', async (done) => {
  const searchedTitle = 'Updated Title';

  const res = await request.delete(`/deleteTitle/${searchedTitle}`);

  expect(res.status).toBe(200);

  expect(res.body.message).toBe(`Title: ${searchedTitle}, DELETED from the database!`);
  done();
});

// Cleans up database between each test
afterAll(async () => {
  await Title.deleteMany()
  await mongoose.disconnect()
});