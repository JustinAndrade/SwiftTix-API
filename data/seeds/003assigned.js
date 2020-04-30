exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("assigned")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("assigned").insert([
        { ticket_id: 1, user_id: 3 },
        { ticket_id: 2, user_id: 3 },
        { ticket_id: 3, user_id: 3 },
      ]);
    });
};
