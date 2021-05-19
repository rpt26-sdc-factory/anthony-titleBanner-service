const Enrolled = require('../../db/enrolled.model');
const { exampleEnrolledGenerator } = require('../../server/example.data');
const mongoose = require('mongoose');



// enrolled numbers
const generateEnrolledData = async (num) => {
  await mongoose.connect('mongodb://localhost/enrolledDB', { useUnifiedTopology: true, useNewUrlParser: true })
  // console.log(mongoose.connection.readyState);
  let data = exampleEnrolledGenerator(num);

  let enrolledIds = data[0].id;
  let enrolledNums = data[0].enrolled;

  for (let i = 1; i < enrolledNums.length; i++) {
    Enrolled.findOne({ id: enrolledIds[i].toString() }, (err, data) => {
      if (err) {
        throw err;
      } else {
        if (data) {
          console.log(`enrolled id: ${data.id} is already in the database!`);

        } else {
          Enrolled.insertMany({
            id: enrolledIds[i].toString(),
            enrolled: enrolledNums[i],
          })
            .then(() => console.log(`${enrolledNums[i]} saved!`))
            .catch(() => console.error(`Error ${enrolledNums[i]}, NOT saved!`));
        }
      }
    })
  }

  setTimeout(() => {
    console.log(
      `\Enrolled Numbers are generated!\nHave a nice day 😀 !\n`
    )
    process.exit();
  }, 1000);
}

generateEnrolledData(1000)