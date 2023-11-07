// minioConfig.js
const Minio = require('minio');

const minioClient = new Minio.Client({
  endPoint: 'minio',
  port: 9000,
  useSSL: false,
  accessKey: process.env.MINIO_ACCESS_KEY, // Now using environment variables
  secretKey: process.env.MINIO_SECRET_KEY  // Now using environment variables
});

module.exports = minioClient;
