const { MMA } = require('../db/index');

module.exports = {
  addFighter: (fighter) => MMA.create(fighter),
};
