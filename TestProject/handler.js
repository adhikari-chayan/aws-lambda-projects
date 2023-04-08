// Require the framework and instantiate it
const api = require('lambda-api')();

// Define a route
api.get('/status', async (req, res) => {
  return { status: 'ok' };
});

// Declare your Lambda handler
exports.hello = async (event, context) => {
  // Run the request
  return await api.run(event, context);
};
