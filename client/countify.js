const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/stats/:id", async (req, res) => {
  const { id } = req.params;
  const { data } = await axios.get(
    `https://countify.imtca.repl.co/api/${id}/info`
  );
  res.render("countify/stats", {
    id,
    name: data.name,
    icon: data.icon,
  });
});

module.exports = router;
