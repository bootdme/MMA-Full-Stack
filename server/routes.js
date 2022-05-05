const express = require('express');

const router = express.Router();
const { getAll, addFighter } = require('./controllers');

router.get('/fighter', getAll);
router.post('/fighter', addFighter);

module.exports = router;
