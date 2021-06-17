const redis = require('redis');

const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env' });


const REDIS_PORT = process.env.REDIS_PORT || 6379;

exports.redisClient = redis.createClient(REDIS_PORT);