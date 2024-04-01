const express = require("express");
// const chalk = require('chalk'); // TODO: fix ES Module Error
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();

const PORT =
  process.env.STATUS === "production"
    ? process.env.PROD_PORT
    : process.env.DEV_PORT;
    
const app = express();
const sessionsRouter = require("./src/routers/sessionsRouter");
const adminRouter = require("./src/routers/adminRouter");

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/sessions", sessionsRouter);
app.use("/admin", adminRouter);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Anderson Creative Design",
    data: ["a", "b", "c"],
  });
});

app.listen(PORT, () => {
  debug(`listening to port ${PORT}`);
});
