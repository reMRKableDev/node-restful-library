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

app.get("/", ReadAll);
app.get("/:id", ReadOne);
app.post("/", Create);
app.put("/:id", Update);
app.delete("/:id", Delete);

app.listen(port, () => console.log(`Listening to port: ${port}`));
