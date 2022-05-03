const mongoose = require('mongoose');
require('dotenv').config();

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const MMASchema = new mongoose.Schema({
  url: String,
  name: String,
  nickname: String,
  age: String,
  birthday: String,
  locality: String,
  association: [String],
  height: String,
  weight: String,
  weightClass: String,
  style: String,
  imageUrl: String,
  wins: {
    knockouts: Number,
    submissions: Number,
    decisions: Number,
    others: Number,
  },
  losses: {
    knockouts: Number,
    submissions: Number,
    decisions: Number,
    others: Number,
  },
  noContests: Number,
  fights: [
    {
      name: String,
      date: String,
      opponent: String,
      result: String,
      method: String,
      referee: String,
      refereeUrl: String,
      round: String,
      time: String,
      eventUrl: String,
      opponentUrl: String,
    },
  ],
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('database connected');
});

const MMA = mongoose.model('MMA', MMASchema);

module.exports = { MMA };
