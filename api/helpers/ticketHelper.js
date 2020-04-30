const db = require("../../data/dbConfig");
const TICKETS = "TICKETS";
const COMMENTS = "COMMENTS";
const USERS = "USERS";

// Read
const getTickets = () => {
  return db(TICKETS);
};

const getTicketById = async (id) => {
  return db(TICKETS)
    .innerJoin("USERS", "TICKETS.created_by", "USERS.id")
    .where("TICKETS.id", id)
    .first();
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
