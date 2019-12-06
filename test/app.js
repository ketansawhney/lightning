const lightning = require('../dist/lightning');

const app = lightning();

app.listen({ port: 4000 }, () =>
  console.log('Web App listening at port 4000.')
);
