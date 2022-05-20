const { sendMail } = require('../services/mail.service');
const { EmailActionEnum } = require('../enums');
const router = require('express').Router();

router.route('/sendMail')
    .post(async (req, res) => {
      await sendMail(req.body.email, EmailActionEnum.WELCOME)
      res.sendStatus(204);
    });



module.exports = router;
