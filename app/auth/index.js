const express = require('express');
const https = require('https');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { ENDPOINTS, URLS } = require('../../constants');
const { getConsentAccessToken } = require('./utilities');

const router = express.Router();

router.get(ENDPOINTS.ROOT, async (req, res) => {
  // const payload = {
  //   iss: URLS.AUTH_SERVER,
  //   aud: process.env.CLIENT_ID,
  //   response_type: 'code id_token',
  //   client_id: process.env.CLIENT_ID,
  //   redirect_uri: URLS.AUTH_REDIRECT,
  //   scope: 'openid accounts',
  //   claims: {
  //     userinfo: {
  //       openbanking_intent_id: {
  //         value: '5d1b863f-b983-42c6-88e0-2daec459d2b3',
  //         essential: true,
  //       },
  //     },
  //   },
  // };
  // const accessToken = jwt.sign(payload, key, {
  //   header: {
  //     alg: 'PS256',
  //     typ: 'JWT',
  //     kid: '7fab807d-4988-4012-8f10-a77655787450',
  //   },
  // });
  const consentToken = await getConsentAccessToken();
  res.json({ consentToken });
});

module.exports = router;
