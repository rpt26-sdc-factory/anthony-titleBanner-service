const Title = require('../db/title.model');
const Enrolled = require('../db/enrolled.model');
const { exampleDataGenerator, exampleEnrolledGenerator } = require('../server/example.data');
const mongoose = require('mongoose');


// titles
const generateTitleData = async (num) => {
  await mongoose.connect('mongodb://localhost/title', { useUnifiedTopology: true, useNewUrlParser: true })
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
          console.log(`id: ${data.id} is already in the database!`);

        } else {
          Title.insertMany({
            id: titleIds[i].toString(),
            title: titles[i],
          })
            .then(() => console.log(`Page ${titles[i]} saved!`))
            .catch(() => console.error(`Error Page ${titles[i]}, NOT saved!`));
        }
      }
    });
  }
  let generatedEnrolledNums = exampleEnrolledGenerator();
  generateEnrolledData(generatedEnrolledNums);

  setTimeout(() => {
    console.log(
      `\nTitles are generated!\nHave a nice day 😀 !\n`
    )
    process.exit();
  }, 1000);
};


// enrolled numbers
const generateEnrolledData = (data) => {
  let enrolledIds = data[0].id;
  let enrolledNums = data[0].enrolled;

  for (let i = 0; i < enrolledNums.length; i++) {
    console.log(enrolledNums[i]);
  }
}



generateTitleData(10);




