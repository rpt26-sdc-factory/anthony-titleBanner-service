const { exampleDataGenerator, exampleEnrolledGenerator } = require('../../server/example.data');
const { Parser } = require('json2csv');


const titlesCSV = (num, iteration) => {
  let generatedTitles = exampleDataGenerator(num);

  let titleIds = generatedTitles[0].id;
  let titles = generatedTitles[0].titleName;
  let len = titles.length;

  let titleRecords = [];
  for (let i = 0; i < len; i++) {
    let id = iteration === 1 ? i : i + num + 1;
    titleRecords.push({ id: id.toString(), title: titles[i] });
  }

  const json2csvParser = new Parser();
  const csv = json2csvParser.parse(titleRecords);

  return csv;
};


const enrolledCSV = (num, iteration) => {
  let generatedEnrolled = exampleEnrolledGenerator(num);

  let enrolledIds = generatedEnrolled[0].id;
  let enrolled = generatedEnrolled[0].enrolled;

  let len = enrolled.length;

  let enrolledRecords = [];
  for (let i = 1; i < len; i++) {
    let id = iteration === 1 ? i : i + num;
    enrolledRecords.push({ id: id.toString(), enrolled: enrolled[i] });
  }

  const json2csvParser = new Parser();
  const csv = json2csvParser.parse(enrolledRecords);

  return csv;
};

module.exports = {
  titlesCSV,
  enrolledCSV
};

