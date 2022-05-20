const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');
const { config, mailInfo } = require('../constants');

const sendMail = (userMail, action, context = {}) => {

  const emailTransporter = nodemailer.createTransport({
    from: 'No Reply Sep 2021',
    service: 'gmail',
    auth: {
      user: config.ROOT_EMAIL,
      pass: config.ROOT_EMAIL_PASSWORD,
    }
  });

  const handlebarOptions = {
    viewEngine: {
      extname: '.hbs',
      defaultLayout: 'main',
      layoutsDir: path.resolve(__dirname, '../', 'email-templates', 'layouts'),
      partialsDir: path.resolve(__dirname, '../', 'email-templates', 'partials')
    },
    viewPath: path.resolve(__dirname, '../', 'email-templates'),
    extName: '.hbs',
  };

  emailTransporter.use('compile', hbs(handlebarOptions));

  const { subject, template } = mailInfo[action];

  return emailTransporter.sendMail({ to: userMail, subject, template, context });
}

module.exports = {
  sendMail,
};
