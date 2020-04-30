exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("comments")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("comments").insert([
        {
          id: 1,
          ticket_id: 1,
          user_id: 3,
          message: "Currently looking into this resolution",
        },
      ]);
    });
};
