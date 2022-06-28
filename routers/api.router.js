const { emailService } = require('../services');
const { emailActionEnum } = require('../enums');
const router = require('express').Router();

router.route('/sendMail')
    .post(async (req, res) => {
      const { email, name } = req.body;
      await emailService.sendMail(email, emailActionEnum.LOGOUT, { name });
      res.sendStatus(204);
    });

module.exports = router;
