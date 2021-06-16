const { redisClient } = require('../redis-client/client');


// Cache middleware
exports.cache = (req, res, next) => {
  const { id } = req.params;

  client.get(id, (err, data) => {
    if (err) throw err;

    if (data !== null) {
      console.log(data);
      res.send(data);
      next();
    } else {
      next();
    }
  });
}