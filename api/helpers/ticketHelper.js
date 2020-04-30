const db = require("../../data/dbConfig");

// Read
const getTickets = () => {
  return db("user");
};

// Add
const addTicket = (Ticket) => {
  return db("ticket").insert(Ticket);
};

// Update
const editTicket = (id, changes) => {
  return db("ticket").where({ id }).update(changes);
};

// Delete
const delTicket = (id) => {
  return db("ticket").where({ id }).del();
};
module.exports = { getTickets, addTicket, editTicket, delTicket };
