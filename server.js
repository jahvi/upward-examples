const { createUpwardServer } = require('@magento/upward-js');

async function serve() {
  await createUpwardServer({
    port: 8000,
    bindLocal: true,
    logUrl: true,
    upwardPath: './upward-ssr-styled.yml',
    env: {
      POKEMON_GRAPHQL_URL: 'https://graphql-pokemon.now.sh',
      COUNTRIES_GRAPHQL_URL: 'https://countries.trevorblades.com'
    }
  });
}

serve();
