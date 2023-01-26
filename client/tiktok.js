const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/user/search", (_, res) => {
  res.render("tiktok/user/search");
});

router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { data } = await axios.get(
    `https://api.subscriberwars.space/tiktok/v2/${id}`
  );
  res.render("tiktok/user/stats", {
    id,
    name: data.nickname,
    username: data.username,
    avatar: data.pfp,
  });
});

module.exports = router;
