const express = require("express");
const router = express.Router();

const path = require("path");
router.use("/public", express.static(path.join(__dirname, "public")));
router.use("/css", express.static(path.join(__dirname, "css")));
router.use("/ess", express.static(path.join(__dirname, "ess")));

router.get("/", (_, res) => {
  res.render("index");
});

router.use("/clickers", require("./clickers"));
router.use("/countify", require("./countify"));
router.use("/youtube", require("./yt"));

module.exports = router;
