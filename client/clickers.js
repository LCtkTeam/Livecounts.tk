const express = require("express");

const router = express.Router();

router.get("/toastify", async (_, res) => {
  res.render("clickers/toastify");
});

router.get('/choccy', (_, res) => {
	res.render("clickers/choccy")
})

module.exports = router;
