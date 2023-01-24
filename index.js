const express = require("express");
const app = express();
app.use(require("morgan")("tiny"));
app.set("view engine", "ejs");
app.set("views", "./client/views");

app.use("/", require("./client"));
app.use("/api", require("./api"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
