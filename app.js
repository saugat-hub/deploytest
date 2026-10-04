const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Docker Deployment Test</title>
      </head>
      <body>
        <h1>🚀 Deployment Successful!</h1>
        <p>GitHub Actions → Kali VM → Docker</p>
      </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
