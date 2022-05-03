const models = require('./models');
const { getSherdogURL } = require('./get/getSherdogURL');
const { getFighterData } = require('./get/getFighterData');

module.exports = {
  addFighter: async (req, res) => {
    try {
      const api = async (fighter, callback) => {
        try {
          const url = await getSherdogURL(fighter);
          const data = await getFighterData(url);
          if (callback && typeof callback === 'function') {
            callback(data);
          }
          return data;
        } catch (err) {
          console.error(err);
        }
      };
      const mma = await api(req.body.fighter);
      const result = await models.addFighter(mma);
      res.status(202).send('Successfully added to database');
    } catch (err) {
      res.status(404).send('Error: unable to add fighter to database');
    }
  },
};
