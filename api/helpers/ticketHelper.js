const db = require("../../data/dbConfig");

const getTickets = () => {
  return db("ticket");
};

module.exports = { getTickets };
