const { emailActionEnum } = require('../enums');

module.exports = {
  [emailActionEnum.WELCOME]: {
    subject: 'Weclome on board',
    template: 'welcome'
  },

  [emailActionEnum.FORGOT_PASSWORD]: {
    subject: 'Opps looks like you forgot password',
    template: 'forgot-password'
  },

  [emailActionEnum.LOGOUT]: {
    subject: 'Account was blocked',
    template: 'logout'
  },

  [emailActionEnum.DELETE_ACCOUNT]: {
    subject: 'Account was deleted',
    template: 'delete-account',
  },
}
