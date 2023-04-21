const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/channel/search", (_, res) => {
  res.render("youtube/channel/search");
});

router.get("/channel/:id", async (req, res) => {
  const { id } = req.params;

  let { count } = req.query;
  if (!count || typeof count !== "string") count = "0";

  const {
    data: { items },
  } = await axios.get(`https://yt.lemnoslife.com/channels?part=about&id=${id}`);
  res.render("youtube/channel/stats", {
    id,
    name: items[0].about.title,
    handle: items[0].about.handle,
    count: parseInt(count),
    counts: [
      ["subscribers", "Subscribers"],
      ["views", "Total video views"],
      ["videos", "Videos"],
      ["goal", "Goal"],
    ],
  });
});

router.get("/video/search", (_, res) => {
  res.render("youtube/video/search");
});

router.get("/video/:id", async (req, res) => {
  const { id } = req.params;

  let { count } = req.query;
  if (!count || typeof count !== "string") count = "0";

  const { data } = await axios.get(
    `https://mixerno.space/api/youtube-video-counter/user/${id}`
  );
  res.render("youtube/video/stats", {
    id,
    title: data.user[0].count,
    count: parseInt(count),
    counts: [
      ["views", "Views"],
      ["likes", "Likes"],
      ["dislikes", "Dislikes"],
      ["comments", "Comments"],
    ],
  });
});

router.get("/stream/search", (_, res) => {
  res.render("youtube/stream/search");
});

router.get("/stream/:id", async (req, res) => {
  const { id } = req.params;

  let { count } = req.query;
  if (!count || typeof count !== "string") count = "0";

  const { data } = await axios.get(
    `https://mixerno.space/api/youtube-stream-counter/user/${id}`
  );
  res.render("youtube/stream/stats", {
    id,
    title: data.user[0].count,
    count: parseInt(count),
    counts: [
      ["viewers", "Viewers"],
      ["likes", "Likes"],
      ["views", "Total views"],
    ],
  });
});

router.get("/total", (_, res) => {
  res.render("youtube/total");
});

module.exports = router;
