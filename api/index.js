const express = require("express");
const router = express.Router();
router.use(require("cors")());

router.use("/clickers", require("./clickers"));
router.use("/countify", require("./countify"));
router.use("/tiktok", require("./tiktok"));
router.use("/twitter", require("./twitter"));
router.use("/youtube", require("./yt"));

module.exports = router;
