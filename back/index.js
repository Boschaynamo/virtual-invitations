const express = require("express");

const PORT=3001

const server = express();
server.use(express.json());

server.listen(PORT, () => {
  console.log(PORT + ` PORT SUCCESS`);
});
