const { MMA } = require('../db/index');

module.exports = {
  getAll: () =>
    MMA.find(
      {},
      {
        name: 1,
        nickname: 1,
        age: 1,
        birthday: 1,
        association: 1,
        locality: 1,
        height: 1,
        weight: 1,
        weightClass: 1,
        imageUrl: 1,
        wins: 1,
        losses: 1,
        noContests: 1,
      }
    ),
  addFighter: (fighter) => MMA.create(fighter),
};
