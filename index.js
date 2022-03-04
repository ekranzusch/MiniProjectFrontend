const express = require('express');
const { createClient } = require('redis');
const app = express();

(async () => {
  const client = createClient({
    // TODO FIX URL with ENV VARS from Docker
    url: 'redis://alice:foobared@awesome.redis.server:6380'
  });

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  await client.set('key', 'value');
  const value = await client.get('key');
})();

app.get('/', (req, res) => {
  // TODO check if this works without await/async
  const keys = client.get('key')
  res.json(keys);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
