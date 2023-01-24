const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/user/search", (_, res) => {
  res.render("twitter/user/search");
});

router.get("/user/:username", async (req, res) => {
  const { username } = req.params;
  const { data } = await axios.get(
    `https://api.subscriberwars.space/twitter/${username}`
  );
  res.render("twitter/user/stats", {
    username,
    name: data.displayName,
    avatar: data.pfp.replace("normal", "400x400"),
  });
});

module.exports = router;
