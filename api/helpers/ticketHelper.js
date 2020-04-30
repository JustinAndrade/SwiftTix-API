const db = require("../../data/dbConfig");
const TICKETS = "TICKETS";

// Read
const getTickets = () => {
  return db(TICKETS);
};

const getTicketById = (id) => {
  return db(TICKETS);
};

// Add
const addTicket = (ticket) => {
  return db(TICKETS).insert(ticket);
};

// Update
const editTicket = (id, changes) => {
  return db(TICKETS).where({ id }).update(changes);
};

// Delete
const delTicket = (id) => {
  return db(TICKETS).where({ id }).del();
};
module.exports = {
  getTickets,
  getTicketById,
  addTicket,
  editTicket,
  delTicket,
};
