const db = require("../../data/dbConfig");
const TICKETS = "TICKETS";
const COMMENTS = "COMMENTS";
const USERS = "USERS";

// Read
const getUsers = () => {
  return db(USERS);
};

// Add
const addUser = (user) => {
  return db(USERS).insert(user);
};

// Update
const editUser = (id, changes) => {
  return db(USERS).where({ id }).update(changes);
};

// Delete
const delUser = (id) => {
  return db(USERS).where({ id }).del();
};

module.exports = { getUsers, addUser, editUser, delUser };
