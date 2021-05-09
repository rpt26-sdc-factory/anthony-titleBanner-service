const { exampleDataGenerator, exampleEnrolledGenerator } = require('../server/example.data');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs');
const path = require('path');

const saveToCSV = async (num) => {

  const csvWriter = createCsvWriter({
    path: 'seed/__data__/titles.csv',
    header: [
      { id: 'id', title: 'id' },
      { id: 'title', title: 'title' }
    ]
  });

  let portion = num / 2
  let generatedTitles = await exampleDataGenerator(portion);
  let titleIds = generatedTitles[0].id;
  let titles = generatedTitles[0].titleName;
  let len = generatedTitles[0].titleName.length;

  let titleRecords = [];
  for (let i = 0; i < num; i++) {


    titleRecords.push({ id: titleIds[i].toString(), title: titles[i] });
  }

  console.log(titleRecords[0].titleName[0]);

};



saveToCSV(100);