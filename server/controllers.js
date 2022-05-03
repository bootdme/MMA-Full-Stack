const models = require('./models');

module.exports = {
  addFighter: async (req, res) => {
    try {
      const result = await models.addFighter(fighter);
      res.status(202).send('Successfully added to database');
    } catch (err) {
      res.status(404).send('Error: unable to add fighter to database');
    }
  },
};
