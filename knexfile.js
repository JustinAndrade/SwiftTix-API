module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/quicktix.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
      tableName: "dbMigrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
