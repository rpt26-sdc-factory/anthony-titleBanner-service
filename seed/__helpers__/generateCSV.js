const { exampleDataGenerator, exampleEnrolledGenerator } = require('../../server/example.data');


// postgres
const generateData = (num, iteration) => {
  let generatedTitles = exampleDataGenerator(num);
  let generatedEnrolled = exampleEnrolledGenerator(num);

  let titles = generatedTitles[0].titleName;
  let enrolled = generatedEnrolled[0].enrolled;
  let len = titles.length;

  let content = '';
  let count = 0;

  for (let i = 0; i < len; i++) {
    count > 10 ? count = 1 : count += 1;
    let title = titles[i].match(/[A-Za-z\s]/gi).join('') + '-' + count.toString();
    content += `${title},${enrolled[i]}\n`;
  }
  return content;
};

// cassandra
// const generateData = (num, iteration) => {
//   let generatedTitles = exampleDataGenerator(num);
//   let generatedEnrolled = exampleEnrolledGenerator(num);

//   let titles = generatedTitles[0].titleName;
//   let enrolled = generatedEnrolled[0].enrolled;
//   let len = titles.length;

//   let content = '';
//   let count = 0;

//   for (let i = 0; i < len; i++) {
//     count > 10 ? count = 1 : count += 1;
//     let title = titles[i].match(/[A-Za-z\s]/gi).join('') + '-' + count.toString();
//     let id = iteration === 1 ? i + 1 : i + num + 1;
//     content += `${id},${title},${enrolled[i]}\n`;
//   }
//   return content;
// };

module.exports = {
  generateData
};

