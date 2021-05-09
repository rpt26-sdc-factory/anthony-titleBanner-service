const { exampleDataGenerator, exampleEnrolledGenerator } = require('../../server/example.data');
// const { Parser } = require('json2csv');


const titlesCSV = (num, iteration) => {
  let generatedTitles = exampleDataGenerator(num);

  let titleIds = generatedTitles[0].id;
  let titles = generatedTitles[0].titleName;
  let len = titles.length;

  let content = '';
  // let titleRecords = [];
  for (let i = 0; i < len; i++) {
    let id = iteration === 1 ? i + 1 : i + num + 1;
    // titleRecords.push({ id: id.toString(), title: titles[i] });
    content += `${id},"${titles[i]}"\n`;
  }

  // const json2csvParser = new Parser();
  // const csv = json2csvParser.parse(titleRecords);

  return content;
};


const enrolledCSV = (num, iteration) => {
  let generatedEnrolled = exampleEnrolledGenerator(num);

  let enrolledIds = generatedEnrolled[0].id;
  let enrolled = generatedEnrolled[0].enrolled;

  let len = enrolled.length;

  let content = '';
  // let enrolledRecords = [];
  for (let i = 1; i < len; i++) {
    let id = iteration === 1 ? i : i + num;
    // enrolledRecords.push({ id: id.toString(), enrolled: enrolled[i] });
    content += `${id},${enrolled[i]}\n`;
  }

  // const json2csvParser = new Parser();
  // const csv = json2csvParser.parse(enrolledRecords);

  return content;
};

module.exports = {
  titlesCSV,
  enrolledCSV
};

