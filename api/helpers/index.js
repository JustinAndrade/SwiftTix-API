const users = require("./userHelper");
const tickets = require("./ticketHelper");

// Spreading in all helpers for access

module.exports = {
  ...users,
  ...tickets,
};
