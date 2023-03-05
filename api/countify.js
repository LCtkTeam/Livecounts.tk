const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/stats/:id", async (req, res) => {
  const { id } = req.params;
  const { data } = await axios.get(`https://countify.cf/api/${id}/count`);
  return res.json({
    count: data.count,
    previousCounter: data.previousCounter,
  });
});

module.exports = router;
