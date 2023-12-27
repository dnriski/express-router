const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hallo");
});
router.get("/create", (req, res) => {
  res.send("Hallo Create");
});
router.get("/:id", (req, res) => {
  res.send("Hallo Showw");
});

module.exports = router;
