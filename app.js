const express = require("express");
const path = require("path");

const checkListRouter = require("./src/routes/checkList");
const rootRouter = require("./src/routes/index");
require("./config/database");

const app = express();
app.use(express.json());

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use("/checkLists", checkListRouter);
app.use("/", rootRouter);

app.listen(3000, () => {
  console.log("Servidor rodando");
});
