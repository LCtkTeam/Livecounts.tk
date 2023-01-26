const express = require("express");
const app = express();
app.use(require("morgan")("tiny"));
app.set("view engine", "ejs");
app.set("views", "./client/views");

app.use("/", require("./client"));
app.use("/api", require("./api"));

app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api"))
    res.status(404).json({
      status: 404,
      error: `The page ${req.path} doesn't exist.`,
    });
  else res.status(404).render("404");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
