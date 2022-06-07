import sqlite3 from "sqlite3";

const DBSOURCE = "/comments.db";

const SQL_COMMENTS_CREATE = `
    CREATE TABLE COMMENTS (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        descricao TEXT
    )`;

const database = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.log(err.message);
    throw err;
  } else {
    console.log("Base de dados conectada com sucesso!");
    database.run(SQL_COMMENTS_CREATE, (err) => {
      if (err) {
        return;
      } else {
        console.log("Tabela de comentarios criada com sucesso.");
      }
    });
  }
});

export default database;
