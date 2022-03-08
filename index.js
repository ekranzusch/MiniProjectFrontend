const express = require('express');
const app = express();
const { createClient } = require('redis');

const redisHost = process.env.REDIS_LEADER_SERVICE_HOST;
const redisPort = process.env.REDIS_LEADER_SERVICE_PORT;
const client = createClient({
  url: `redis://${redisHost}:${redisPort}`
});
global.value = '';

(async () => {
  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  await client.set('key', 'value');
  global.value = await client.get('key');

})();

app.get('/', (req, res) => {
  console.log(`value is: ${global.value}`);
  res.json({value: global.value});
});
app.listen(3000, () => {
 console.log('Server started on port 3000');
});
