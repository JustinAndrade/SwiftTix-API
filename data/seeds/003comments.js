exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("COMMENTS")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("COMMENTS").insert([
        {
          id: 1,
          ticket_id: 1,
          user_id: 3,
          message: "Currently looking into this resolution",
          date: Date.now(),
        },
        {
          id: 2,
          ticket_id: 1,
          user_id: 3,
          message: "Found the resolution",
          date: Date.now(),
        },
        {
          id: 3,
          ticket_id: 2,
          user_id: 3,
          message: "Currently looking into this resolution",
          date: Date.now(),
        },
      ]);
    });
};
