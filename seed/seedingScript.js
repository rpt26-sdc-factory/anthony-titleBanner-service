const { titlesCSV, enrolledCSV } = require('./__helpers__/jsonCSV');
const fs = require('fs');
const path = require('path');


const saveToCSV = (num) => {
  let start = new Date().getTime();

  for (let i = 1; i <= 2; i++) {
    let iterationStart = new Date().getTime();
    let portion = num / 2;

    let titles = titlesCSV(portion, i);
    let enrolled = enrolledCSV(portion, i);

    fs.writeFileSync(path.resolve(__dirname, '__data__', 'titles', `titles-${i}.csv`), titles);
    fs.writeFileSync(path.resolve(__dirname, '__data__', 'enrolled', `enrolled-${i}.csv`), enrolled);

    let iterationEnd = new Date().getTime();
    console.log(`\n${portion} records, ${(iterationEnd - iterationStart) / 1000} seconds 👍!`);
  }

  let end = new Date().getTime();
  console.log(`\n${num} records, ${(end - start) / 1000} seconds 👍!`);
};

// npm run csv
// saveToCSV(10);

// npm run csv-plus
saveToCSV(10000000);

