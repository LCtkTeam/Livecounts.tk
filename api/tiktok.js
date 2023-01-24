const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/user/stats/:id", async (req, res) => {
  const { data } = await axios.get(
    `https://api.subscriberwars.space/tiktok/v2/${req.params.id}`
  );
  let followers = data.followers;
  if (data.followers >= 1000) followers = data.followers + 5;
  if (data.followers >= 10000) followers = data.followers + 50;
  if (data.followers >= 100000) followers = data.followers + 500;
  if (data.followers >= 1000000) followers = data.followers + 5000;
  if (data.followers >= 10000000) followers = data.followers + 50000;

  return res.json({
    counts: {
      followers,
      following: data.following,
      likes: data.likes,
    },
  });
});

module.exports = router;
