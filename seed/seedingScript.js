const { generateData } = require('./__helpers__/generateCSV');
const fs = require('fs');
const path = require('path');


const saveToCSV = (num) => {
  fs.writeFileSync('seed/__data__/data.csv', '"title", "enrolled"\n');

  let start = new Date().getTime();

  for (let i = 1; i <= 2; i++) {
    let iterationStart = new Date().getTime();
    let portion = num / 2;

    let dataCSV = generateData(portion, i);

    fs.appendFileSync('seed/__data__/data.csv', dataCSV);

    let iterationEnd = new Date().getTime();
    console.log(`${portion} records, ${(iterationEnd - iterationStart) / 1000} seconds 👍!`);
  }

  let end = new Date().getTime();
  console.log(`\n${num} records, ${(end - start) / 1000} seconds 👍!`);
};

// const saveToCSV = (num) => {
//   fs.writeFileSync('seed/__data__/data.csv', '"id","title", "enrolled"\n');

//   let start = new Date().getTime();

//   for (let i = 1; i <= 2; i++) {
//     let iterationStart = new Date().getTime();
//     let portion = num / 2;

//     let dataCSV = generateData(portion, i);

//     fs.appendFileSync('seed/__data__/data.csv', dataCSV);

//     let iterationEnd = new Date().getTime();
//     console.log(`${portion} records, ${(iterationEnd - iterationStart) / 1000} seconds 👍!`);
//   }

//   let end = new Date().getTime();
//   console.log(`\n${num} records, ${(end - start) / 1000} seconds 👍!`);
// };


// npm run csv
saveToCSV(10000000);