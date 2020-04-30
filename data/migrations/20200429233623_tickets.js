exports.up = async function (knex) {
  await knex.schema.createTable("ticket", (tbl) => {
    tbl.increments("id");
    tbl.string("title", 128).unique().notNullable();
    tbl.string("priority", 128).defaultTo("Medium").notNullable();
    tbl.string("description", 512).notNullable();
    tbl.integer("age", 128).defaultTo(Date.now()).notNullable();
    tbl.string("progress", 128).notNullable();
    tbl.string("status").defaultTo("Open").notNullable();
    tbl.integer("created_by").references("id").inTable("user");
  });

  await knex.schema.createTable("assigned", (tbl) => {
    tbl.integer("ticket_id").references("id").inTable("ticket");
    tbl.integer("user_id").references("id").inTable("user");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("ticket");
  await knex.schema.dropTableIfExists("assigned");
};
