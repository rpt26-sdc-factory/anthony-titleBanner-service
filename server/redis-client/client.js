const redis = require('redis');
exports.client = redis.createClient(6379);