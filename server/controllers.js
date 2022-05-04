const models = require('./models');
const { getSherdogURL } = require('./get/getSherdogURL');
const { getFighterData } = require('./get/getFighterData');

const api = async (fighter) => {
  try {
    const url = await getSherdogURL(fighter);
    if (!url) {
      throw new Error('Invalid url');
    }
    const data = await getFighterData(url);
    return data;
  } catch (err) {
    return err;
  }
};

module.exports = {
  addFighter: async (req, res) => {
    try {
      const mma = await api(req.body.fighter);
      if (mma.name === 'Error') {
        throw new Error('There is a problem with your link');
      }
      await models.addFighter(mma);
      res.status(202).send('Successfully added to database');
    } catch (err) {
      res.status(404).send('Error: unable to add fighter to database');
    }
  },
};
