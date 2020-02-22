const express = require("express");
const app = express();
const port = 3000;

const {
  ReadAll,
  ReadOne,
  Create,
  Update,
  Delete
} = require("../controller/routeControllers");

app.use(express.json());

// GET (READ all books)
app.get("/", ReadAll);
// GET (READ 1 specific book)
app.get("/:id", ReadOne);
// POST (CREATE)
app.post("/", Create);
// PUT (UPDATE 1 book)
app.put("/:id", Update);
// DELETE (DELETE)
app.delete("/:id", Delete);

app.listen(port, () => console.log(`Listening to port: ${port}`));
