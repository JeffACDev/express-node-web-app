const express = require("express");
// const chalk = require('chalk'); // TODO: fix ES Module Error
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();
const sessionsRouter = require('./src/routers/sessionsRouter');

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/sessions", sessionsRouter);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Anderson Creative Design",
    data: ["a", "b", "c"],
  });
});

app.listen(PORT, () => {
  debug(`listening to port ${PORT}`);
});
