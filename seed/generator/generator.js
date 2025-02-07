const { exampleDataGenerator, exampleEnrolledGenerator } = require('../__helpers__/example.data');

let start = new Date().getTime();

let numOfRecords = 10000000;

exampleDataGenerator(numOfRecords);
exampleEnrolledGenerator(numOfRecords);

let end = new Date().getTime();

console.log(`${end - start} milliseconds for ${numOfRecords} records!`);
