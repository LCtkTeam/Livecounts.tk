const express = require("express");
const router = express.Router();
router.use(require("cors")());

const Plausible = require("plausible-tracker").default;
const plausible = Plausible({
  domain: "livecounts.tk",
});

router.use((_req, _res, next) => {
  plausible.trackEvent("API");
  next();
});

router.use("/clickers", require("./clickers"));
router.use("/countify", require("./countify"));
router.use("/tiktok", require("./tiktok"));
router.use("/twitter", require("./twitter"));
router.use("/youtube", require("./yt"));

module.exports = router;
