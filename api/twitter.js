const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/user/stats/:username", async (req, res) => {
  const { data } = await axios.get(
    `https://api.subscriberwars.space/twitter/${req.params.username}`
  );
  return res.json({
    counts: {
      followers: data.followers,
      following: data.following,
      tweets: data.tweets,
    },
  });
});

module.exports = router;
