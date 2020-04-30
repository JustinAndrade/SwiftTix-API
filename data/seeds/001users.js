exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("USERS")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("USERS").insert([
        {
          id: 1,
          username: "justin",
          password: "password",
          first_name: "Justin",
          last_name: "Andrade",
          email: "j.andrade.john@gmail.com",
        },
        {
          id: 2,
          username: "bob",
          password: "password",
          first_name: "Bob",
          last_name: "Marley",
          email: "bobmarley@gmail.com",
        },
        {
          id: 3,
          username: "joe",
          password: "password",
          first_name: "Joe",
          last_name: "Dirt",
          email: "joedirt@gmail.com",
        },
      ]);
    });
};
