require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { getSherdogURL } = require('./get/getSherdogURL');
const { getFighterData } = require('./get/getFighterData');
const routeUrls = require('./routes');

const app = express();

const { PORT } = process.env || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', routeUrls);

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

const mma = api('Dustin');

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
