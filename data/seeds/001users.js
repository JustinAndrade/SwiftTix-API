exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("user").insert([
        {
          id: 1,
          username: "justin_andrade",
          password: "password",
          first_name: "Justin",
          last_name: "Andrade",
          email: "j.andrade.john@gmail.com",
        },
        {
          id: 2,
          username: "luis_hernandez",
          password: "password",
          first_name: "Luis",
          last_name: "Hernandez",
          email: "l.hernandez@lambdaschool.com",
        },
        {
          id: 3,
          username: "gannon_darcy",
          password: "password",
          first_name: "Gannon",
          last_name: "Darcy",
          email: "g.darcy@gmail.com",
        },
      ]);
    });
};
