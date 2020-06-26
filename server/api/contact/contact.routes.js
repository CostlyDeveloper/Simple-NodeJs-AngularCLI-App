'use strict';
const express    = require('express');
const controller = require('./contact.controller');

const router = express.Router();

router.post('/', new controller().sendMail);
module.exports = router;
