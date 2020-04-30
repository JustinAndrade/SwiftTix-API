const users = require("./userHelper");
const tickets = require("./ticketHelper");
const comments = require("./commentsHelper");

// Spreading in all helpers for access

module.exports = {
  ...users,
  ...tickets,
  ...comments,
};
