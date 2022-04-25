// server.js
const express = require('express');

const app = express();
const PORT = process.env.PORT;

app.use(express.static('./'));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});