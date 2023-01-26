const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/toastify", async (_, res) => {
  res.render("clickers/toastify");
});

router.get("/choccy", (_, res) => {
  res.render("clickers/choccy");
});

router.get("/popcat", (_, res) => {
  res.render("clickers/popcat/stats", {
    flag: "https://em-content.zobj.net/thumbs/240/microsoft/319/globe-showing-europe-africa_1f30d.png",
    name: "Worldwide",
    country: "all",
  });
});

router.get("/popcat/:country", async (req, res) => {
  const { data } = await axios.get("https://flagcdn.com/en/codes.json");

  const { country } = req.params;
  res.render("clickers/popcat/stats", {
    flag: `https://flagcdn.com/w160/${country.toLowerCase()}.png`,
    name: data[country.toLowerCase()],
    country: country.toUpperCase(),
  });
});

module.exports = router;
