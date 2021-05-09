const { titlesCSV, enrolledCSV } = require('./__helpers__/jsonCSV');
const fs = require('fs');
const path = require('path');


const saveToCSV = (num) => {
  fs.writeFileSync('seed/__data__/titles.csv', '"id","title"\n');
  fs.writeFileSync('seed/__data__/enrolled.csv', '"id","enrolled"\n');

  let start = new Date().getTime();
  let titles = '';
  let enrolled = '';

  for (let i = 1; i <= 2; i++) {
    let iterationStart = new Date().getTime();
    let portion = num / 2;

    let generatedTitles = titlesCSV(portion, i);
    let generatedEnrolled = enrolledCSV(portion, i);

    fs.appendFileSync('seed/__data__/titles.csv', generatedTitles);
    fs.appendFileSync('seed/__data__/enrolled.csv', generatedEnrolled);

    // fs.writeFileSync(path.resolve(__dirname, '__data__', 'titles', `titles-${i}.csv`), titles);
    // fs.writeFileSync(path.resolve(__dirname, '__data__', 'enrolled', `enrolled-${i}.csv`), enrolled);

    let iterationEnd = new Date().getTime();
    console.log(`${portion} records, ${(iterationEnd - iterationStart) / 1000} seconds 👍!`);
  }

  let end = new Date().getTime();
  console.log(`\n${num} records, ${(end - start) / 1000} seconds 👍!`);
};

// npm run csv
// saveToCSV(10);

// npm run csv-plus
saveToCSV(10000000);

