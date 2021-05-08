const { titlesCSV, enrolledCSV } = require('./__helpers__/jsonCSV');
const fs = require('fs');
const path = require('path');


const saveToCSV = (num) => {
  let start = new Date().getTime();

  let titles = titlesCSV(num);
  let enrolled = enrolledCSV(num);

  fs.writeFileSync(path.resolve(__dirname, '__data__', 'titles.csv'), titles);
  fs.writeFileSync(path.resolve(__dirname, '__data__', 'enrolled.csv'), enrolled);

  let end = new Date().getTime();
  console.log(`\n${num} records, ${(end - start) / 1000} seconds 👍!`);
};

// npm run csv
// saveToCSV(10);

// npm run csv-plus
saveToCSV(10000000);

