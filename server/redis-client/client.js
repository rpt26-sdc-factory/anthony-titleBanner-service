const redis = require('redis');
exports.redisClient = redis.createClient(6379);