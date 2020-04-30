exports.up = async function (knex) {
  await knex.schema.createTable("USERS", (tbl) => {
    tbl.increments("id");
    tbl.string("username", 128).unique().notNullable();
    tbl.string("password", 128).notNullable();
    tbl.string("first_name", 128).notNullable();
    tbl.string("last_name", 128).notNullable();
    tbl.string("email", 128).unique().notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("USERS");
};
