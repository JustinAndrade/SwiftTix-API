const express = require("express");
const server = express();
const configuredMiddleware = require("./middleware");

configuredMiddleware(server);

server.get("/", (req, res) => {
  res.status(200).json({ message: "QuickTix API Online" });
});

module.exports = server;
