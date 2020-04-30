const express = require("express");
const server = express();

const { userRouter, ticketRouter, commentRouter } = require("../api/routers");
const configuredMiddleware = require("./middleware");

configuredMiddleware(server);
server.use(express.json());

server.use("/users", userRouter);
server.use("/tickets", ticketRouter);
server.use("/comments", commentRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "QuickTix API Online" });
});

module.exports = server;
