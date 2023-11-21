const Redis = require('ioredis');

// Connect to the Redis service using the Docker service name
const redis = new Redis({
  host: 'redis',  // Use the Docker service name as the hostname
  port: 6379
});

module.exports = redis;
