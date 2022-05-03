const express = require('express');

const router = express.Router();
const { saveToDB } = require('../db/helpers');

router.post('/fighter', (req, res) => {
  const fighter = req.body;
  saveToDB(fighter)
    .then(() => {
      res.status(202).send({
        message: 'Successful post to database',
      });
    })
    .catch((err) => {
      res.status(404).send({
        message: err,
      });
    });
});

module.exports = router;
