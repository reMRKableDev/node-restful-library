const express = require("express");
const app = express();
const port = 3000;

const bookRouter = require("./routes");

app.use(express.json());

app.use("/api", bookRouter);

app.listen(port, () => console.log(`Listening to port: ${port}`));
