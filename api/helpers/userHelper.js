const db = require("../../data/dbConfig");

// Read
const getUsers = () => {
  return db("user");
};

// Add
const addUser = (user) => {
  return db("user").insert(user);
};

// Update
const editUser = (id, changes) => {
  return db("user").where({ id }).update(changes);
};

// Delete
const delUser = (id) => {
  return db("user").where({ id }).del();
};

module.exports = { getUsers, addUser, editUser, delUser };
