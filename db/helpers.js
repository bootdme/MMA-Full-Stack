const { MMA } = require('./index');

module.exports = {
  saveToDB: (fighter) => MMA.create(fighter),
};
