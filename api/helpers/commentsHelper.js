const db = require("../../data/dbConfig");
const TICKETS = "TICKETS";
const COMMENTS = "COMMENTS";
const USERS = "USERS";

// Read
const getComments = () => {
  return db(COMMENTS)
    .select(
      "COMMENTS.id",
      "COMMENTS.ticket_id",
      "COMMENTS.message",
      "USERS.username as created_by",
      "USERS.first_name",
      "USERS.last_name",
      "USERS.email",
      "COMMENTS.date"
    )
    .innerJoin(USERS, "COMMENTS.user_id", "USERS.id");
};

const getCommentsById = async (id) => {
  return db(TICKETS)
    .select(
      "USERS.username",
      "COMMENTS.message",
      "COMMENTS.date",
      "USERS.first_name",
      "USERS.last_name"
    )
    .innerJoin("COMMENTS", "TICKETS.id", "COMMENTS.ticket_id")
    .innerJoin("USERS", "COMMENTS.user_id", "USERS.id")
    .where("TICKETS.id", id);
};

// Add
const addComment = (comment) => {
  return db(COMMENTS).insert(comment);
};

// Update
const editComments = (id, changes) => {
  return db(COMMENTS).where({ id }).update(changes);
};

// Delete
const delComments = (id) => {
  return db(COMMENTS).where({ id }).del();
};
module.exports = {
  getComments,
  getCommentsById,
  addComment,
  editComments,
  delComments,
};
