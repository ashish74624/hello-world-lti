const { Provider } = require("ltijs");

const provider = new Provider({
  database: {
    url: "mongodb://127.0.0.1:27017/ltijs",
  },
  server: {
    port: 3000,
  },
});

provider.onResourceLink(async (context, request, response) => {
  response.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Hello World LTI Tool</title>
      </head>
      <body>
        <h1>Hello World!</h1>
        <p>Our first external LTI tool is running.</p>
      </body>
    </html>
  `);
});

async function start() {
  await provider.listen();
}

start().catch(console.error);

