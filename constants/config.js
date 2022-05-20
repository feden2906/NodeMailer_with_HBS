require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,

  ROOT_EMAIL: process.env.ROOT_EMAIL || 'test@gmail.com',
  ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD || 'test_pass',
}
