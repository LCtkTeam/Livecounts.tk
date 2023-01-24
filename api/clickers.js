const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/toastify", async (_, res) => {
  const { data } = await axios.get(
    "https://toastifyclicker.imtca.repl.co/api/count"
  );
  return res.json(data);
});

router.get("/choccycounts", async (_, res) => {
  const { data } = await axios.get(
    "https://choccycountsapi.imtca.repl.co/visits"
  );
  return res.json(data);
});

module.exports = router;
