const { exampleDataGenerator, exampleEnrolledGenerator } = require('../../server/example.data');


const titlesCSV = (num, iteration) => {
  let generatedTitles = exampleDataGenerator(num);

  let titleIds = generatedTitles[0].id;
  let titles = generatedTitles[0].titleName;
  let len = titles.length;

  let content = '';
  for (let i = 0; i < len; i++) {
    let id = iteration === 1 ? i + 1 : i + num + 1;
    content += `${id},"${titles[i]}"\n`;
  }
  return content;
};


const enrolledCSV = (num, iteration) => {
  let generatedEnrolled = exampleEnrolledGenerator(num);

  let enrolledIds = generatedEnrolled[0].id;
  let enrolled = generatedEnrolled[0].enrolled;

  let len = enrolled.length;

  let content = '';
  for (let i = 1; i < len; i++) {
    let id = iteration === 1 ? i : i + num;
    content += `${id},${enrolled[i]}\n`;
  }
  return content;
};


module.exports = {
  titlesCSV,
  enrolledCSV
};

