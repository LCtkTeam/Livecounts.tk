const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/user/stats/:username", async (req, res) => {
  try {
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
  } catch (err) {
    console.error(err);
    res.json(null);
  }
});

module.exports = router;
