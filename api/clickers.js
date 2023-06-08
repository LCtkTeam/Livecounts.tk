const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/toastify", async (_, res) => {
  const { data } = await axios.get(
    "https://toastifyclicker.imtca.repl.co/api/count"
  );
  return res.json(data);
});

router.get("/popcat/all", async (_, res) => {
  try {
    const { data } = await axios.get("https://leaderboard.popcat.click");
    return res.json({
      count: Object.values(data).reduce((a, b) => a + b, 0),
    });
  } catch {
    return res.json(null);
  }
});

router.get("/popcat/:country", async (req, res) => {
  try {
    const { data } = await axios.get("https://leaderboard.popcat.click");
    return res.json({
      count: data[req.params.country],
    });
  } catch {
    return res.json(null);
  }
});

router.get("/global/1", async (req, res) => {
  const { data } = await axios.get("http://global-clicker.mrcode.io/getpoints");
  return res.json({
    count: parseInt(data),
  });
});

module.exports = router;
