const express = require("express");
const server = express();

const {
  userRouter,
  ticketRouter,
  commentRouter,
  authRouter,
} = require("../api/routers");
const configuredMiddleware = require("./middleware");

configuredMiddleware(server);
server.use(express.json());

server.use("/api/users", userRouter);
server.use("/api/tickets", ticketRouter);
server.use("/api/comments", commentRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "QuickTix API Online" });
});

module.exports = server;
