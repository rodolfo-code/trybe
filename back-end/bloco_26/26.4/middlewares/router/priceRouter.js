const axios = require('axios');
const express = require('express');
const tokenValidate = require('../middlewares/tokenValidate');

const API_EXTERNA = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const router = express.Router();

router.get('/price', tokenValidate, async (req, res) => {
  const result = await axios(API_EXTERNA);

  return res.status(200).json(result.data);
});

module.exports = router;
