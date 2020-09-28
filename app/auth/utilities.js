const fs = require('fs');
const https = require('https');
const querystring = require('querystring');
const { URLS } = require('../../constants');

const getConsentAccessToken = async () => {
  const qsParams = {
    grant_type: 'client_credentials',
    scope: 'accounts',
    client_assertion_type:
      'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
    client_assertion: process.env.CLIENT_ASSERTION,
  };
  const query = querystring.encode(qsParams);
  const config = {
    method: 'POST',
    url: `${URLS.AUTH_SERVER}?${query}`,
    key: fs.readFileSync(`${process.cwd()}/server.key`),
    cert: fs.readFileSync(`${process.cwd()}/cert.der`),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      'x-fapi-financial-id': 'test',
      'Cache-Control': 'no-cache',
    },
  };

  try {
    return await https.request(config);
  } catch (error) {
    throw error;
  }
};

module.exports = { getConsentAccessToken };
