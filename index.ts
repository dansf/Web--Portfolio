import express from "express";
import database from "./src/db/database";

const app = express();

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || "http://localhost";

app.use(express.static(`${__dirname}/public`));

// Routes
// app.get("/", (req, res) => {
//   res.send(`Hellor world!`);
// });

/* GET is commonly used when the client is pulling data from the server
    Listar ou listar um em um CRUD */
app.get("/comments", (req, res) => {
  console.log(`Request received at /comments`);
  database.all("SELECT * FROM comments", (err, rows) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      res.send(rows);
    }
  });
});

/* POST is commonly used when the client are sending data to the server
    Criar em um CRUD */
app.post("/comments", (req, res) => {
  console.log("POST request at /comments");
});

// "Escutar" a porta que o servidor está sendo executado
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
