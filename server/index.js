require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routeUrls = require('./routes');

const app = express();

const { PORT } = process.env || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', routeUrls);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
