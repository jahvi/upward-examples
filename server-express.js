const express = require('express');
const { middleware } = require('@magento/upward-js');

async function serve() {
  const app = express();
  const port = 8000;

  app.get('/', (req, res) => res.send('Hello from Express!'));

  const upwardMiddleware = await middleware(
    `${__dirname}/upward-ssr-styled.yml`,
    {
      POKEMON_GRAPHQL_URL: 'https://graphql-pokemon.now.sh',
      COUNTRIES_GRAPHQL_URL: 'https://countries.trevorblades.com'
    }
  );

  app.use(upwardMiddleware);

  app.listen(port, () => console.log(`Listening on port ${port}!`));
}

serve();
