const { redisClient } = require('../redis-client/client');


// Cache middleware
exports.cache = (req, res, next) => {
  const { id } = req.params;

  redisClient.get(id, (err, data) => {
    if (err) throw err;

    if (data !== null) {
      console.log('look at me', JSON.parse(data));
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
}