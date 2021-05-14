const { exampleDataGenerator, exampleEnrolledGenerator } = require('./example.data');
const { getStars } = require('./getStars');


const generateData = (num, iteration) => {
  let generatedTitles = exampleDataGenerator(num);
  let generatedEnrolled = exampleEnrolledGenerator(num);

  let titlesID = generatedTitles[0].id;
  let titles = generatedTitles[0].titleName;
  let enrolled = generatedEnrolled[0].enrolled;
  let len = titles.length;

  let content = '';
  let count = 0;

  for (let i = 0; i < len; i++) {
    count > 10 ? count = 1 : count += 1;
    let title = titles[i].match(/[A-Za-z\s]/gi).join('') + '-' + count.toString();
    let star = getStars();
    let reviewsCount = Math.floor(Math.random() * (30 - 1) + 1);
    content += `${title},${enrolled[i]},${reviewsCount},${star}\n`;
    // content += `${titlesID[i]},${title},${enrolled[i]},${reviewsCount},${star}\n`;

  }
  return content;
};


module.exports = {
  generateData
};

