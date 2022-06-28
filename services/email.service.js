const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');
const { config } = require('../constants');
const mailInfo = require('../email-templates');

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
      layoutsDir: path.join(process.cwd(), 'email-templates', 'layouts'),
      partialsDir: path.join(process.cwd(), 'email-templates', 'partials')
    },
    viewPath: path.join(process.cwd(), 'email-templates', 'views'),
    extName: '.hbs',
  };

  emailTransporter.use('compile', hbs(handlebarOptions));

  const { subject, template } = mailInfo[action] || {};
  if (!subject || !template) {
    throw new Error('Wrong email action');
  }

  context.frontendURL = config.FRONTEND_URL;

  console.info(`Start sending email | user: ${userMail} | action: ${action}`);
  return emailTransporter.sendMail({ to: userMail, subject, template, context });
}

module.exports = {
  sendMail,
};
