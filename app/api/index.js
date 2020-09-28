const express = require('express');
const { ENDPOINTS } = require('../../constants');
const router = express.Router();

router.get(ENDPOINTS.ROOT, (req, res) => {
  res.send(`GET ${req.baseUrl}`);
});

module.exports = router;
