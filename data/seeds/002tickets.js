exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ticket")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ticket").insert([
        {
          id: 1,
          title: "Unable to access email",
          priority: "Medium",
          description:
            "I have tried logging into my work email several times and I am unfortunately unable to access it.",
          age: Date.now(),
          progress: "Waiting",
          status: "Open",
          created_by: 1,
        },
        {
          id: 2,
          title: "Domain not registering",
          priority: "High",
          description:
            "The domain name assigned to the project is unable to register, I have tried multiple times and it is continuously failing.  Unsure of next steps, please advice.",
          age: Date.now() - 500000,
          progress: "Waiting",
          status: "Open",
          created_by: 1,
        },
        {
          id: 3,
          title: "Forgot my password",
          priority: "High",
          description:
            "I am unable to access my account at this time, hence unable to get any work done.",
          age: Date.now() - 200000,
          progress: "Waiting",
          status: "Open",
          created_by: 2,
        },
      ]);
    });
};
