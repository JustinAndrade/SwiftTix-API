exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ASSIGNED")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ASSIGNED").insert([
        { ticket_id: 1, user_id: 3 },
        { ticket_id: 2, user_id: 3 },
        { ticket_id: 3, user_id: 3 },
      ]);
    });
};
