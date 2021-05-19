const getStars = () => {
  let starNumBeforeDecimal = Math.floor(Math.random() * (5) + 1);
  let starNumAfterDecimal = Math.floor(Math.random() * 10);

  return starNumBeforeDecimal === 5
    ? parseFloat(`${starNumBeforeDecimal}.0`).toFixed(1)
    : parseFloat(`${starNumBeforeDecimal}.${starNumAfterDecimal}`).toFixed(1)
}

module.exports = {
  getStars
};

