exports.up = async function (knex) {
  await knex.schema.createTable("TICKETS", (tbl) => {
    tbl.increments("id");
    tbl.string("title", 128).unique().notNullable();
    tbl.string("priority", 128).defaultTo("Medium").notNullable();
    tbl.string("description", 512).notNullable();
    tbl.integer("age", 128).defaultTo(Date.now()).notNullable();
    tbl.string("progress", 128).notNullable();
    tbl.string("status").defaultTo("Open").notNullable();
    tbl.integer("created_by").references("id").inTable("USERS");
  });

  await knex.schema.createTable("COMMENTS", (tbl) => {
    tbl.increments("id");
    tbl.integer("ticket_id").references("id").inTable("TICKETS");
    tbl.integer("user_id").references("id").inTable("USERS");
    tbl.string("message", 512).notNullable();
    tbl.integer("date").notNullable();
  });

  await knex.schema.createTable("ASSIGNED", (tbl) => {
    tbl.integer("ticket_id").references("id").inTable("TICKETS");
    tbl.integer("user_id").references("id").inTable("USERS");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("TICKETS");
  await knex.schema.dropTableIfExists("COMMENTS");
  await knex.schema.dropTableIfExists("ASSIGNED");
};
