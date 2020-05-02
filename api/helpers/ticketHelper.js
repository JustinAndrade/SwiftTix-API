const db = require("../../data/dbConfig");
const TICKETS = "TICKETS";
const COMMENTS = "COMMENTS";
const USERS = "USERS";
const ASSIGNED = "ASSIGNED";

// Read
const getTickets = () => {
  return db(TICKETS)
    .select(
      "TICKETS.id",
      "TICKETS.title",
      "TICKETS.priority",
      "TICKETS.description",
      "TICKETS.age",
      "TICKETS.progress",
      "TICKETS.status",
      "USERS.username as created_by",
      "USERS.email as created_by_email",
      "ASSIGNED.user_id"
    )
    .innerJoin("USERS", "TICKETS.created_by", "USERS.id")
    .innerJoin("ASSIGNED", "TICKETS.id", "ASSIGNED.ticket_id");
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
