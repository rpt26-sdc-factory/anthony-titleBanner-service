const Title = require('../../db/mongo/title.model');
const { exampleDataGenerator } = require('../../server/example.data');
const mongoose = require('mongoose');


// titles
const generateTitleData = async (num) => {
  await mongoose.connect('mongodb://localhost/titleDB', { useUnifiedTopology: true, useNewUrlParser: true })
  // console.log(mongoose.connection.readyState);
  let generatedTitles = exampleDataGenerator(num);

  let titleIds = generatedTitles[0].id;
  let titles = generatedTitles[0].titleName;

  for (let i = 0; i < titles.length; i++) {
    Title.findOne({ id: titleIds[i].toString() }, (err, data) => {
      if (err) {
        throw err;

      } else {
        if (data) {
          console.log(`title id: ${data.id} is already in the database!`);

        } else {
          Title.insertMany({
            id: titleIds[i].toString(),
            title: titles[i],
          })
            .then(() => console.log(`${titles[i]} saved!`))
            .catch(() => console.error(`Error ${titles[i]}, NOT saved!`));
        }
      }
    });
  }
  setTimeout(() => {
    console.log(
      `\nTitles are generated!\nHave a nice day 😀 !\n`
    )
    process.exit();
  }, 1000);
};

generateTitleData(1000);




