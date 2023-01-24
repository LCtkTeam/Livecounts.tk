const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/channel/search", (_, res) => {
  res.render("youtube/channel/search");
});

router.get("/channel/:id", async (req, res) => {
  const { id } = req.params;
  const { data } = await axios.get(`https://www.banner.yt/channel/${id}`);
  res.render("youtube/channel/stats", {
    id,
    name: data.name,
  });
});

router.get("/video/search", (_, res) => {
  res.render("youtube/video/search");
});

router.get("/video/:id", async (req, res) => {
  const { id } = req.params;
  const { data } = await axios.get(
    `https://mixerno.space/api/youtube-video-counter/user/${id}`
  );
  res.render("youtube/video/stats", {
    id,
    title: data.user[0].count,
  });
});

router.get("/total", (_, res) => {
  res.render("youtube/total");
});

module.exports = router;
