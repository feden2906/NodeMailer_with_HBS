const { EmailActionEnum } = require('../enums');

module.exports = {
  [EmailActionEnum.WELCOME]: {
    subject: 'Welcome on platform!',
    template: 'welcome'
  },
  [EmailActionEnum.ACCOUNT_DELETED]: {
    subject: 'Your account was deleted',
    template: 'delete-account'
  },
  [EmailActionEnum.ABOUT]: {
    subject: 'Some info about us',
    template: 'about'
  },
}
