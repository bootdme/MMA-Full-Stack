const express = require('express');

const router = express.Router();
const { addFighter } = require('./controllers');

router.post('/fighter', addFighter);

module.exports = router;
